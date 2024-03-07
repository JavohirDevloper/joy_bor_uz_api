const { deleteMessage } = require("./deletemessage");
const { getMessages } = require("./findmesages");
const { sendMessage } = require("./sendmessage");
const isMongoId = require("../../shared/validator/isMongoId");
const { updateMessage } = require("./updatemessage");

const find_messages = async (req, res, next) => {
  try {
    let result = await getMessages({ params: req.params });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const send_messges = async (req, res, next) => {
  try {
    let result = await sendMessage({ body: req.body });
    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};
const update_message = async (req, res, next) => {
  try {
    const { messageId } = req.params;
    const { updateData } = req.body;

    if (!isMongoId(messageId)) {
      return res.status(400).json({ error: "Invalid message ID" });
    }

    const updatedMessage = await updateMessage({ messageId, updateData });

    res.status(200).json({ data: updatedMessage });
  } catch (error) {
    next(error);
  }
};

const delete_message = async (req, res, next) => {
  try {
    const { messageId } = req.params;
    if (!isMongoId(messageId)) {
      return res.status(400).json({ error: "Invalid message ID" });
    }

    const deletedMessage = await deleteMessage(messageId);
    if (!deletedMessage) {
      return res.status(404).json({ error: "Message not found" });
    }

    res.status(200).json({ data: deletedMessage });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  find_messages,
  send_messges,
  delete_message,
  update_message,
};
