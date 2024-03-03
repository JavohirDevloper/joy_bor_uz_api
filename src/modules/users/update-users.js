const UpdateUserMe = async ({ body, params, file }) => {
  let existingUser = await User.findById({ _id: params.id, is_deleted: false });
  if (!existingUser) {
    throw new NotFoundError("user topilmadi!");
  }

    let existingPhoneNumber = await User.findOne({
      phone_number: body.phone_number,
    });

    if (existingPhoneNumber) {
      throw new BadRequestError("phone_number already existed!");
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
};

module.exports = UpdateUserMe;
