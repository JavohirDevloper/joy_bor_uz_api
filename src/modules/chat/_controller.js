const isMongoId = require("../../shared/validator/isMongoId");
const { accessChats } = require("./accessChats");
const { deleteChat } = require("./deleteChats");
const { fetchAllChats } = require("./fetchAllChats");
const { updateChat } = require("./updateChat");

const all_chats = async (req, res, next) => {
  try {
    let result = await fetchAllChats({ user: req.user });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const onetoonechats = async (req, res, next) => {
  try {
    let result = await accessChats({ body: req.body, user: req.user });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const update_chats = async (req, res, next) => {
  try {
    const { chatId } = req.params;
    const { updateData } = req.body;

    if (!isMongoId(chatId)) {
      return res.status(400).json({ error: "Invalid message ID" });
    }

    const updatedMessage = await updateChat({ chatId, updateData });

    res.status(200).json({ data: updatedMessage });
  } catch (error) {
    next(error);
  }
};

const delete_chats = async (req, res, next) => {
  try {
    const { chatId } = req.params;
    if (!isMongoId(chatId)) {
      return res.status(400).json({ error: "Invalid message ID" });
    }

    const deletedMessage = await deleteChat(chatId);
    if (!deletedMessage) {
      return res.status(404).json({ error: "Message not found" });
    }

    res.status(200).json({ data: deletedMessage });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  all_chats,
  onetoonechats,
  update_chats,
  delete_chats,
};
