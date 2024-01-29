const { AddCategory } = require("./add-category");
const { AllCategry } = require("./all-category");
const httpValidator = require("../../shared/http-validator");
const { EditCategory } = require("./edit-category");
const { UpdateCategorySchema, AddCategorySchemas } = require("./schema");
const { DeleteCategory } = require("./delete-category");
const { FIndById } = require("./findbyid-category");

const all_category = async (req, res, next) => {
  try {
    let result = await AllCategry();
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const add_category = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, AddCategorySchemas);
    let result = await AddCategory({ body: req.body });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const edit_category = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, UpdateCategorySchema);
    let result = await EditCategory({ params: req.params, body: req.body });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const delete_category = async (req, res, next) => {
  try {
    let result = await DeleteCategory({ params: req.params });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const findbyid_category = async (req, res, next) => {
  try {
    let result = await FIndById({ params: req.params });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  all_category,
  add_category,
  edit_category,
  delete_category,
  findbyid_category,
};
