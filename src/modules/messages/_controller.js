const { getMessages } = require("./findmesages");
const { sendMessage } = require("./sendmessage");

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

module.exports = { find_messages, send_messges };
