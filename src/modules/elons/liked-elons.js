const { NotFoundError, BadRequestError } = require("../../shared/errors");
const User = require("../users/User");

const LikedElons = async ({ user, params }) => {
  let findUser = await User.findById(user.id);

  if (!findUser) {
    throw new NotFoundError("not found User");
  }

  if (!findUser.saved_elons.includes(params.id)) {
    user.saved_elons.push(params.id);
    await user.save();
  }

  return "aded";
};

module.exports = {LikedElons}