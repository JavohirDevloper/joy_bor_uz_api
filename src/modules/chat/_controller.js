const { accessChats } = require("./accessChats");
const creatGroup = require("./creatGroup");
const { fetchAllChats } = require("./fetchAllChats");

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

const create_group = async (req, res, next) => {
  try {
    let result = await creatGroup({ body: req.body, user: req.user });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const adduser_group = async (req, res, next) => {
  try {
    let result = await addToGroup({ body: req.body });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = { all_chats, onetoonechats, create_group, adduser_group };
