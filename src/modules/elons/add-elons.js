const { NotFoundError } = require("../../shared/errors");
const User = require("../users/User");
const { Elon } = require("./Elon");
const { join } = require("path");
const Add_Elons = async ({ body, user, files }) => {
  let { title, description, ...data } = body;
  let findUser = await User.findById({ _id: user.id });

  if (!findUser) {
    throw new NotFoundError("user not found!");
  }
  let adding_elons = await Elon.create({
    title,
    description,
    images: "/public/" + files.map((file) => file.filename),
    elon_user: user.id,
    ...data,
  });

  findUser.elons.push(adding_elons._id);
  findUser.save();

  return adding_elons;
};

module.exports = { Add_Elons };
