const { NotFoundError } = require("../../shared/errors");
const { Category } = require("./Category");

const DeleteCategory = async ({ params }) => {
  let exsitingCategory = await Category.findById({ _id: params.id });

  if (!exsitingCategory) {
    throw new NotFoundError("category not found!");
  }

  let DeleteCategory = await Category.findByIdAndDelete(
    { _id: params.id },
    { new: true }
  );

  return DeleteCategory;
};

module.exports = {
DeleteCategory
}