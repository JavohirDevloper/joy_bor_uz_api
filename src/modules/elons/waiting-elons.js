const { NotFoundError } = require("../../shared/errors");
const { Elon } = require("./Elon");

const FindWaitingElons = async () => {
  let existingelons = await Elon.find({
    elon_holati: "waiting",
  });

  if (!existingelons) {
    throw new NotFoundError("elonlar hozircha yoq");
  }

  return { message: "nice", data: existingelons };
};

module.exports = { FindWaitingElons };
