const express = require("express");
const config = require("./shared/config");
const cors = require("cors");
const db = require("./db");
const path = require("path");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/swagger-output");
const Server = require("socket.io");

const handleError = require("./shared/errors/handle");

app.use(cors());
app.use(express.json());

const adminRoute = require("./modules/admin/_api");
const UserRoute = require("./modules/users/_api");
const ElonsRoute = require("./modules/elons/_api");
const BannerRoute = require("./modules/banner/_api");
const CategoryRoute = require("./modules/category/_api");
const ChatRoute = require("./modules/chat/_api");
const MessageRoute = require("./modules/messages/_api");

app.use(adminRoute);
app.use(UserRoute);
app.use(ElonsRoute);
app.use(BannerRoute);
app.use(CategoryRoute);
app.use(ChatRoute);
app.use(MessageRoute);

db();

app.use(handleError);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const server = app.listen(5000, () => {
  console.log(`Server Listening at PORT - ${5000}`);
});

const io = new Server.Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:5000",
  },
});

const sockets = [];

io.on("connection", async (socket) => {
  try {
    let token = socket.request.headers.authorization;
    if (!token) {
      throw new Error("token not found");
      return;
    }

    socket.handshake.auth.token = token;

    let auth = jwt.verify(socket.handshake.auth.token, "hey");
    let exstingUser = await User.findById({ _id: auth.id });

    if (!exstingUser) {
      throw new Error("user not found bro");
      return;
    }

    exstingUser.password = "";
    exstingUser.status = "";

    socket.user = exstingUser;
    socket.handshake.auth.verficate = auth;
    sockets.push(socket);

    socket.on("setup", (userData) => {
      socket.join(userData.id);
      socket.emit("connected");
    });

    socket.on("join room", (room) => {
      socket.join(room);
    });

    socket.on("typing", (room) => socket.in(room).emit("typing"));
    socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

    socket.on("new file message", async (data) => {
      const { filename, message, chatId } = data;
      let msg = await messageModel.create({
        sender: socket.handshake.auth.verficate.id,
        message,
        chatId,
        filename: `/static/${filename}`,
      });

      msg = await (
        await msg.populate("sender", "fullname profilePic phone_number")
      ).populate({
        path: "chatId",
        select: "chatName isGroup users",
        model: "Chat",
        populate: {
          path: "users",
          select: "fullname phone_number profilePic",
          model: "User",
        },
      });
      await chatModel.findByIdAndUpdate(chatId, {
        latestMessage: msg,
      });
      if (msg) {
        msg.chatId.users.forEach((user) => {
          if (user._id == msg.sender._id) return;
          const receiverSocket = sockets.find(
            (socket) =>
              socket.handshake.auth.verficate.id == user._id && socket.connected
          );
          if (receiverSocket) {
            receiverSocket.emit("message recieved", { msg });
          }
        });
      }
    });

    socket.on("new message", async (data) => {
      const { message, chatId } = data;
      let msg = await messageModel.create({
        sender: socket.handshake.auth.verficate.id,
        message,
        chatId,
      });

      msg = await (
        await msg.populate("sender", "fullname profilePic phone_number")
      ).populate({
        path: "chatId",
        select: "chatName isGroup users",
        model: "Chat",
        populate: {
          path: "users",
          select: "fullname phone_number profilePic",
          model: "User",
        },
      });
      await chatModel.findByIdAndUpdate(chatId, {
        latestMessage: msg,
      });
      if (msg) {
        msg.chatId.users.forEach((user) => {
          if (user._id == msg.sender._id) return;
          const receiverSocket = sockets.find(
            (socket) =>
              socket.handshake.auth.verficate.id == user._id && socket.connected
          );
          if (receiverSocket) {
            receiverSocket.emit("new message recieved", { msg });
          }
        });
      }
    });
  } catch (error) {
    socket._error({ message: error.message });
    return;
  }
});
