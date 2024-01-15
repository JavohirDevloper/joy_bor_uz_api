let { BadRequestError } = require("../../shared/errors");
const { Banner } = require("./Banner");
const AddBanner = async ({ body }) => {
  let { title, descrtion, image } = body;

  let exstingBanner = await Banner.findOne({ title });

  if (exstingBanner) {
    throw new BadRequestError("Banner already exsted!");
  }

  let createBanner = await Banner.create({ title, image, descrtion });

  return createBanner;
};

module.exports = {
  AddBanner,
};
