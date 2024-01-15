let User = require("./User");
let { NotFoundError } = require("../../shared/errors");
const DeleteUsersAll = async ({ user }) => {
  let findUser = await User.findById({ _id: user.id });
  if (!findUser) {
    throw new NotFoundError("user not found");
  }
  let updateUser = await User.findByIdAndUpdate(
    { _id: user.id },
    { is_deleted: findUser.is_deleted == false ? true : false },
    { new: true }
  );
  return updateUser;
};
module.exports = { DeleteUsersAll };
