const { Category } = require("../category/Category");
const User = require("../users/User");
const { Elon } = require("./Elon");

const Add_Elons = async ({ body, user, files }) => {
  let { title, description, category, ...data } = body;
  let findUser = await User.findById({ _id: user._id });

  let findCategory = await Category.findById(category);

  let imagePaths = [];

  if (files && Array.isArray(files)) {
    imagePaths = files.map((file) => "/public/" + file.filename);
  } else {
    throw new NotFoundError("imaglar kelishi shart");
  }

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
  findCategory.categry_elons.push(adding_elons._id);
  findCategory.save();

  return adding_elons;
};

module.exports = { Add_Elons };
