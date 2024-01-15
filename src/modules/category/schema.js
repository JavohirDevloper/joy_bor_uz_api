const Joi = require("joi");

const AddCategorySchemas = {
  body: Joi.object({
    name: Joi.string().min(4).max(64).required().messages({
      "string.empty": "name kiritilishi kerak!",
      "string.min": "name uzunligi 4 tadan ko'p bolishi kerak!",
      "string.max": "name uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "name kiritilishi kerak!",
    }),
  }),
};

const UpdateCategorySchema = {
  body: Joi.object({
    name: Joi.string().min(4).max(64).required().messages({
      "string.empty": "name kiritilishi kerak!",
      "string.min": "name uzunligi 4 tadan ko'p bolishi kerak!",
      "string.max": "name uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "name kiritilishi kerak!",
    }),
  }),
};

module.exports = { AddCategorySchemas, UpdateCategorySchema };
