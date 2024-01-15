const { hashSync } = require("bcryptjs");
const user = require("./User");

const AddUser = async ({ body }) => {
  let { fullname, image, phone_number } = body;
  let existingUser = await user.findOne({ phone_number });

  if (existingUser) {
    return "phone_number already exists!";
  }

  let createUser = await user.create({
    fullname,
    image,
    phone_number,
  });
  return createUser;
};

module.exports = { AddUser };
