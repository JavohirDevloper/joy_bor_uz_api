let User = require("./User");
let { NotFoundError } = require("../../shared/errors");

const DeleteUsersAll = async ({ user }) => {
  if (!user || !user._id) {
    throw new NotFoundError("Invalid user object. Missing _id field.");
  }

  try {
    let findUser = await User.findById(user._id);
    if (!findUser) {
      throw new NotFoundError("User not found");
    }

    let isDeleted = !findUser.is_deleted;
    let updateUser = await User.findByIdAndUpdate(
      user._id,
      { is_deleted: isDeleted },
      { new: true }
    );

    return updateUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { DeleteUsersAll };
