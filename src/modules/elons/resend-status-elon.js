const { NotFoundError } = require("../../shared/errors");
const { Elon } = require("./Elon");

const ResentElon = async ({ params }) => {
  let existingelons = await Elon.findOne({
    _id: params.id,
    elon_holati: "no_faol",
  });

  if (!existingelons) {
    throw new NotFoundError("elon not found");
  }
  existingelons.elon_holati = "waiting";
  existingelons.save();

  return { message: "elon adminga jonatildi" };
};

module.exports = { ResentElon };
