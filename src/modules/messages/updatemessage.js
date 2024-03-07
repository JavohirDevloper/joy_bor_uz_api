const { messageModel } = require("./message");

const updateMessage = async ({ messageId, updateData }) => {
  try {
    const updatedMessage = await messageModel.findByIdAndUpdate(
      messageId,
      updateData,
      { new: true }
    );

    if (!updatedMessage) {
      throw new Error("Message not found");
    }

    return updatedMessage;
  } catch (error) {
    throw error;
  }
};

module.exports = { updateMessage };
