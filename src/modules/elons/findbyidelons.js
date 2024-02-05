const { NotFoundError } = require("../../shared/errors");
const Elon = require("./Elon");

const FindByIdElons = async ({ params }) => {
  let existingelons = await Elon.findById({
    _id: params.id,
    elon_holati: "sucses",
  }).populate([{ path: "elon_user" }]);

  if (!existingelons) {
    throw new NotFoundError("elons not found");
  }
  return existingelons;
};

module.exports = { FindByIdElons };
