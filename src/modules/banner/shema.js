const Joi = require("joi");

const AddBannerSchemas = {
  body: Joi.object({
    title: Joi.string().min(4).max(64).required().messages({
      "string.empty": "title kiritilishi kerak!",
      "string.min": "title uzunligi 4 tadan ko'p bolishi kerak!",
      "string.max": "title uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "title kiritilishi kerak!",
    }),
    descrtion: Joi.string().min(1).max(100).required().messages({
      "string.empty": "descrtion kiritilishi kerak!",
      "string.min": "descrtion uzunligi 9 ta bolishi kerak!",
      "string.max": "descrtion uzunligi 9 ta bolishi kerak!",
      "any.required": "descrtion kiritilishi kerak!",
    }),
    image: Joi.string().optional().messages({
      "string.empty": "Image kiritilishi kerak!",
      "any.required": "Image kiritilishi kerak!",
    }),
  }),
};

const UpdateBannerSchema = {
  body: Joi.object({
    title: Joi.string().min(4).max(64).optional().messages({
      "string.empty": "title kiritilishi kerak!",
      "string.min": "title uzunligi 4 tadan ko'p bolishi kerak!",
      "string.max": "title uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "title kiritilishi kerak!",
    }),
    descrtion: Joi.string().min(1).max(100).optional().messages({
      "string.empty": "descrtion kiritilishi kerak!",
      "string.min": "descrtion uzunligi 9 ta bolishi kerak!",
      "string.max": "descrtion uzunligi 9 ta bolishi kerak!",
      "any.required": "descrtion kiritilishi kerak!",
    }),
    image: Joi.string().optional().messages({
      "string.empty": "Image kiritilishi kerak!",
      "any.required": "Image kiritilishi kerak!",
    }),
  }),
};

module.exports = { AddBannerSchemas, UpdateBannerSchema };
