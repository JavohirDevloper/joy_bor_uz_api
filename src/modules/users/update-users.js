const { BadRequestError, NotFoundError } = require("../../shared/errors");
const User = require("./User");

const UpdateUserMe = async ({ body, params, file }) => {
  let existingUser = await User.findById(params.id);
  if (!existingUser) {
    throw new NotFoundError("Foydalanuvchi topilmadi!");
  }

  let existingPhoneNumber = await User.findOne({
    phone_number: body.phone_number,
    _id: { $ne: params.id },
  });

  if (existingPhoneNumber) {
    throw new BadRequestError("Telefon raqami allaqachon mavjud!");
  }

  let updateUserObj = {
    fullname: body.fullname || existingUser.fullname,
    phone_number: body.phone_number || existingUser.phone_number,
    profilePic: file ? "/public/" + file.filename : existingUser.profilePic,
  };

  let editedUser = await User.findByIdAndUpdate(params.id, updateUserObj, {
    new: true,
  });
  return editedUser;
};

module.exports = UpdateUserMe;
