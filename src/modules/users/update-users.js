const User = require("./User");

const UpdateUserMe = async ({ body, params, file }) => {
  const UpdateUserMe = async ({ body, params }) => {
    let existingUser = await User.findById({
      _id: params.id,
      is_deleted: false,
    });
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
      profilePic: body.image
        ? "/public/" + body.image
        : existingUser.profilePic,
    };

    let editedUser = await User.findByIdAndUpdate(params.id, updateUserObj, {
      new: true,
    });
    return editedUser;
  };
};

module.exports = UpdateUserMe;
