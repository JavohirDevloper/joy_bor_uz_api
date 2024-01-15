const { NotFoundError, BadRequestError } = require("../../shared/errors");
const User = require("../users/User");
const { Elon } = require("./Elon");

const DeleteElons = async ({ params, user }) => {
  let FindELons = await Elon.findById({ _id: params.id });

  if (!FindELons) {
    throw new NotFoundError("not found elon");
  }
  let FindEUser = await User.findById({ _id: user.id });
  if (!FindEUser) {
    throw new NotFoundError("not found user");
  }
  if (!FindEUser.elons.includes(params.id)) {
    throw new BadRequestError(
      "bu sizning eloningiz emas uzir buni ochira olmaysiz"
    );
  }

  let DeleteElons = await Elon.findByIdAndDelete(params.id);
  return DeleteElons;
};

module.exports = { DeleteElons };
