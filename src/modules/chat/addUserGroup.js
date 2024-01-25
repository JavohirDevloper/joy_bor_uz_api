const { chatModel } = require("./chat");

const addToGroup = async ({ body }) => {
  const { userId, chatId } = body;
  const existing = await chatModel.findOne({ _id: chatId });
  if (!existing.users.includes(userId)) {
    const chat = await chatModel
      .findByIdAndUpdate(chatId, {
        $push: { users: userId },
      })
      .populate("groupAdmin", "-password")
      .populate("users", "-password");
    if (!chat) res.status(404);
    return chat;
  } else {
    return "user already exists";
  }
};

module.exports = { addToGroup };
