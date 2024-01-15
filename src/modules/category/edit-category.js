const { NotFoundError, BadRequestError } = require("../../shared/errors");
const { Category } = require("./Category");

const EditCategory = async ({ params, body }) => {
  let findCategory = await Category.findById({ _id: params.id });
  if (!findCategory) {
    throw new NotFoundError("not found Category");
  }
  let exsitingCategory = await Category.findOne({ name: body.name });

  if (exsitingCategory) {
    throw BadRequestError("category name already used !");
  }

  let UpdateCategory = await Category.findByIdAndUpdate(
    { _id: params.id },
    { ...body },
    { new: true }
  );
  return UpdateCategory;
};

module.exports = { EditCategory };
