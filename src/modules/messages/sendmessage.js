const { messageModel } = require("./message");

const sendMessage = async ({ body, user }) => {
  const { chatId, message } = body;
  let msg = await messageModel.create({
    sender: user.id,
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
  return msg;
};
module.exports = { sendMessage };
