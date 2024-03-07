const { chatModel } = require("./chat");

const updateChat = async ({ chatId, updateData }) => {
  try {
    const updatedChat = await chatModel.findByIdAndUpdate(chatId, updateData, {
      new: true,
    });

    if (!updatedChat) {
      throw new Error("Chat not found");
    }

    return updatedChat;
  } catch (error) {
    throw error;
  }
};

module.exports = { updateChat };
