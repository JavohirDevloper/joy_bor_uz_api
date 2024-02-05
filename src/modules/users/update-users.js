const User = require("./User");
const { NotFoundError, BadRequestError } = require("../../shared/errors");

const UpdateUser = async ({ body, user, file }) => {
  let existingUser = await User.findById({ _id: user.id, is_deleted: false });
  if (!existingUser) {
    throw new NotFoundError("user topilmadi!");
  }

  let existingfullname = await User.findOne({
    fullname: body.fullname,
  });

  if (existingfullname) {
    throw new BadRequestError("fullname already exted");
  }

  let updateUserObj = {
    fullname: body.fullname ? body.fullname : existingUser.fullname,
    profilePic: file.filename
      ? "/public/" + file.filename
      : existingUser.profilePic,
  };

  let editUser = await User.findByIdAndUpdate(user.id, updateUserObj, {
    new: true,
  });
  return editUser;
};

module.exports = { UpdateUser };
