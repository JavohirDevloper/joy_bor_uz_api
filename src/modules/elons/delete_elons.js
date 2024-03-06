const { NotFoundError, BadRequestError } = require("../../shared/errors");
const User = require("../users/User");
const { Elon } = require("./Elon");

const DeleteElons = async ({ params, user }) => {
  let FindELons = await Elon.findById({ _id: params.id });

  if (!FindELons) {
    throw new NotFoundError("elon topilmadi");
  }

  let FindEUser = await User.findById({ _id: params.id });

  if (!FindEUser) {
    throw new NotFoundError("foydalanuvchi topilmadi");
  }

  if (!FindEUser.elons.includes(params.id)) {
    throw new BadRequestError(
      "Bu sizning eloningiz emas, shuning uchun uni o'chira olmaysiz"
    );
  }

  let DeleteElons = await Elon.findByIdAndDelete(params.id);
  return DeleteElons;
};

module.exports = { DeleteElons };
