const { NotFoundError } = require("../../shared/errors");
const { Category } = require("../category/Category");
const User = require("../users/User");
const { Elon } = require("./Elon");

const Add_Elons = async ({ body, user }) => {
  let { title, description, category, ...data } = body;

  let imagePaths = body.files?.map((file) => "/public/" + file.filename);

  let findUser = await User.findById({ _id: user._id });
  let findCategory = await Category.findById(category);

  let adding_elons = await Elon.create({
    title,
    description,
    images: imagePaths,
    elon_user: user._id,
    category,
    ...data,
  });

  findUser.elons.push(adding_elons._id);
  findUser.save();
  findCategory.categry_elons.push(adding_elons._id); // Corrected typo
  findCategory.save();

  return adding_elons;
};

module.exports = { Add_Elons };
