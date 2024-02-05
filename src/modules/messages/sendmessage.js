const { chatModel } = require("../chat/chat");
const { messageModel } = require("./message");

const sendMessage = async ({ body, user }) => {
  const { chatId, message, blogo_id, ...rest } = body;
  let msg = await messageModel.create({
    sender: user.id,
    message,
    chatId,
    ...rest,
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
