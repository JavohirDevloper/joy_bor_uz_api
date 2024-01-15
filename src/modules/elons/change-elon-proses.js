const { NotFoundError } = require("../../shared/errors");
const User = require("../users/User");
const { Elon } = require("./Elon");

const Change_Elon_Proses = async ({ params, body }) => {
  let FindElons = await Elon.findById({ _id: params.id });

  if (!FindElons) {
    throw new NotFoundError("not found elon");
  }

  FindElons.elon_holati = body.proses;

  FindElons.save();
  return FindElons;
};

module.exports = { Change_Elon_Proses };
