let User = require("./User");
let { NotFoundError } = require("../../shared/errors");
const DeleteUsersById = async ({ params }) => {
  let findUser = await User.findById({ _id: params.id });
  if (!findUser) {
    throw new NotFoundError("user not found");
  }
  let updateUser = await User.findByIdAndUpdate(
    { _id: params.id },
    { is_deleted: findUser.is_deleted == false ? true : false },
    { new: true }
  );
  return updateUser;
};
module.exports = { DeleteUsersById };
