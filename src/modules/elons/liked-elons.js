const { NotFoundError, BadRequestError } = require("../../shared/errors");
const User = require("../users/User");

const LikedElons = async ({ user, params }) => {
  let findUser = await User.findById(user._id);

  if (!findUser) {
    throw new NotFoundError("User not found");
  }

  const elonIndex = findUser.saved_elons.indexOf(params.id);

  if (elonIndex === -1) {
    findUser.saved_elons.push(params.id);
    await findUser.save();
    return "added";
  } else {
    findUser.saved_elons.splice(elonIndex, 1);
    await findUser.save();
    return "removed";
  }
};

module.exports = { LikedElons };
