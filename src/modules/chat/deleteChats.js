const { NotFoundError } = require("../../shared/errors");
const { chatModel } = require("./chat");

const deleteChat = async (chatId) => {
  try {
    const deletedChat = await chatModel.findByIdAndDelete(chatId);

    if (!deletedChat) {
      throw new NotFoundError("Chat not found");
    }
    return deletedChat;
  } catch (error) {
    throw error;
  }
};

module.exports = { deleteChat };
