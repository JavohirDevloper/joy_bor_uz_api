const { messageModel } = require("./message");

const deleteMessage = async (messageId) => {
  try {
    const deletedMessage = await messageModel.findByIdAndDelete(messageId)

    if (!deletedMessage) {
      throw new Error("Message not found");
    }

    return deletedMessage;
  } catch (error) {
    throw error;
  }
};

module.exports = { deleteMessage };
