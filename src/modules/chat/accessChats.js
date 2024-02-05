const Chat = require("./chat");

const accessChats = async ({ body, user, res }) => {
  const { userId } = body;
  
  if (!userId) {
    res.send({ message: "Provide User's Id" });
    return;
  }

  let chatExists = await Chat.chatModel.findOne({
    $and: [
      { users: { $elemMatch: { $eq: userId } } },
      { users: { $elemMatch: { $eq: user.id } } },
    ],
  });
  if (chatExists) {
    return chatExists;
  } else {
    let data = {
      chatName: "sender",
      users: [userId, user.id],
      isGroup: false,
    };

    const newChat = await Chat.chatModel.create(data);
    const chat = await Chat.chatModel.findById(newChat._id).populate("users");

    return chat;
  }
};

module.exports = { accessChats };
