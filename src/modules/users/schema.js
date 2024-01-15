const Joi = require("joi");

const AddUserSchemas = {
  body: Joi.object({
    fullname: Joi.string().min(4).max(64).required().messages({
      "string.empty": "fullname kiritilishi kerak!",
      "string.min": "fullname uzunligi 4 tadan ko'p bolishi kerak!",
      "string.max": "fullname uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "fullname kiritilishi kerak!",
    }),
    phone_number: Joi.string().min(9).max(9).required().messages({
      "string.empty": "phone_number kiritilishi kerak!",
      "string.min": "phone_number uzunligi 9 ta bolishi kerak!",
      "string.max": "phone_number uzunligi 9 ta bolishi kerak!",
      "any.required": "phone_number kiritilishi kerak!",
    }),
  }),
};

const UpdateUserSchema = {
  body: Joi.object({
    fullname: Joi.string().min(4).max(64).required().messages({
      "string.empty": "fullname kiritilishi kerak!",
      "string.min": "fullname uzunligi 4 tadan ko'p bolishi kerak!",
      "string.max": "fullname uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "fullname kiritilishi kerak!",
    }),
    phone_number: Joi.string().min(9).max(9).required().messages({
      "string.empty": "phone_number kiritilishi kerak!",
      "string.min": "phone_number uzunligi 9 ta bolishi kerak!",
      "string.max": "phone_number uzunligi 9 ta bolishi kerak!",
      "any.required": "phone_number kiritilishi kerak!",
    }),
  }),
};

module.exports = { AddUserSchemas, UpdateUserSchema };
