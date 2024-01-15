const { Category } = require("./Category");
let { BadRequestError } = require("../../shared/errors");
const AddCategory = async ({ body }) => {
  let exsitingCategory = await Category.findOne({ name: body.name });
  if (exsitingCategory) {
    throw new BadRequestError("category already exted!");
  }
  let createdCategory = await Category.create({ body });
  return createdCategory;
};
module.exports = { AddCategory };
