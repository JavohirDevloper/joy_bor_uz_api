const { chatModel } = require("./chat");

const creatGroup = async ({ body, user }) => {
  const { chatName, users } = body;
  if (!chatName || !users) {
    return { message: "Please fill the fields" };
  }
  const parsedUsers = JSON.parse(users);
  if (parsedUsers.length < 2)
    res.send(400).send("Group should contain more than 2 users");
  parsedUsers.push(req.rootUser);
  const chat = await chatModel.create({
    chatName: chatName,
    users: parsedUsers,
    isGroup: true,
    groupAdmin: user.id,
  });
  const createdChat = await chatModel
    .findOne({ _id: chat._id })
    .populate("users", "-password")
    .populate("groupAdmin", "-password");
  return createdChat;
};

module.exports = creatGroup;
