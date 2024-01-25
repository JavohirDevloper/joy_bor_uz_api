const { messageModel } = require("./message");

const getMessages = async ({ params }) => {
  const { chatId } = params;
  let messages = await messageModel
    .find({ chatId })
    .populate({
      path: "sender",
      model: "User",
      select: "name profilePic phone_number",
    })
    .populate({
      path: "chatId",
      model: "Chat",
    });

  return messages;
};

module.exports = { getMessages };
