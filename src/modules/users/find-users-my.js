const { NotFoundError } = require("../../shared/errors");
const User = require("./User");

const FindUsers = async ({ user }) => {
  let existingUser = await User.findById({ _id: user._id }).populate([
    { path: "elons" },
    { path: "saved_elons" },
  ]);
  if (!existingUser) {
    throw new NotFoundError("not found user");
  }
  return existingUser;
};

module.exports = { FindUsers };
