const { NotFoundError } = require("../../shared/errors");
const { Category } = require("../category/Category");
const User = require("../users/User");
const { Elon } = require("./Elon");
const { join } = require("path");

const Add_Elons = async ({ body, user, files }) => {
  let { title, description, category, ...data } = body;
  console.log(body);
  let findUser = await User.findById({ _id: user._id });
  let findCategory = await Category.findById({ _id: category });

  if (!findUser) {
    throw new NotFoundError("user not found!");
  }
  if (!findCategory) {
    throw new NotFoundError("category not found!");
  }
  let adding_elons = await Elon.create({
    title,
    description,
    images: ["/public/" + files.map((file) => file.filename)],
    elon_user: user.id,
    ...data,
  });

  findUser.elons.push(adding_elons._id);
  findUser.save();
  findCategory.categry_elons.push(adding_elons._id);
  findCategory.save();

  return adding_elons;
};

module.exports = { Add_Elons };
