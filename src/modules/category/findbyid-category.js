const { NotFoundError } = require("../../shared/errors");
const { Category } = require("./Category");

const FIndById = async ({ params }) => {
  let exstingCategory = await Category.findById(params.id).populate({
    path: "categry_elons",
  });

  if (!exstingCategory) {
    throw new NotFoundError("category not found");
  }

  return exstingCategory;
};

module.exports = { FIndById };
