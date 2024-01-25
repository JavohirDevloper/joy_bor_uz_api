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
    origin: "http://localhost:3000",
  },
});
io.on("connection", (socket) => {
  socket.on("setup", (userData) => {
    socket.join(userData.id);
    socket.emit("connected");
  });
  socket.on("join room", (room) => {
    socket.join(room);
  });
  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageRecieve) => {
    var chat = newMessageRecieve.chatId;
    if (!chat.users) console.log("chats.users is not defined");
    chat.users.forEach((user) => {
      if (user._id == newMessageRecieve.sender._id) return;
      socket.in(user._id).emit("message recieved", newMessageRecieve);
    });
  });
});
