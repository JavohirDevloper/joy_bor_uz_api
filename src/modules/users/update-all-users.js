const User = require("./User");
const { NotFoundError, BadRequestError } = require("../../shared/errors");

const UpdateUserAll = async ({ body, params }) => {
  let existingUser = await User.findById({ _id: params.id, is_deleted: false });
  if (!existingUser) {
    throw new NotFoundError("user topilmadi!");
  }

  let existingphone_number = await User.findOne({
    phone_number: body.phone_number,
  });

  if (existingphone_number) {
    throw new BadRequestError("phone_number already exsisted!");
  }

  let updateUserObj = {
    fullname: body.fullname ? body.fullname : existingUser.fullname,
    phone_number: body.phone_number
      ? body.phone_number
      : existingUser.phone_number,
    profilePic: file.filename
      ? "/public/" + file.filename
      : existingUser.profilePic,
  };

  let editUser = await User.findByIdAndUpdate(params.id, updateUserObj, {
    new: true,
  });
  return editUser;
};

module.exports = { UpdateUserAll };
