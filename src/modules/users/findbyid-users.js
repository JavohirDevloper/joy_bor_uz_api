const { NotFoundError } = require("../../shared/errors");
const User = require("./User");

const FindByIdUsers = async ({ params }) => {
  let existingUser = await User.findById({ _id: params.id });
  if (!existingUser) {
    throw new NotFoundError("not found user");
  }
  return existingUser;
};

module.exports = { FindByIdUsers };
