const Chat = require("./chat");

const accessChats = async ({ body, user }) => {
  const { userId } = body;
  if (!userId) res.send({ message: "Provide User's Id" });
  let chatExists = await Chat.find({
    isGroup: false,
    $and: [
      { users: { $elemMatch: { $eq: userId } } },
      { users: { $elemMatch: { $eq: user.id } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");
  chatExists = await user.populate(chatExists, {
    path: "latestMessage.sender",
    select: "name email profilePic",
  });
  if (chatExists.length > 0) {
    res.status(200).send(chatExists[0]);
  } else {
    let data = {
      chatName: "sender",
      users: [userId, user.id],
      isGroup: false,
    };

    const newChat = await Chat.create(data);
    const chat = await chatModel
      .find({ _id: newChat._id })
      .populate("users", "-password");
    return chat;
  }
};

module.exports = { accessChats };
