const { NotFoundError, BadRequestError } = require("../../shared/errors");
const { Banner } = require("./Banner");
const EditBanner = async ({ params, body }) => {
  let FindBanner = await Banner.findById(params.id);

  let title = body.title || FindBanner.title;

  if (title !== FindBanner.title) {
    let existingBanner = await Banner.findOne({
      title,
      _id: { $ne: params.id },
    });

    if (existingBanner) {
      throw new BadRequestError("Banner already exists");
    }
  }
  let updateObject = {
    title,
    descrtion: body.descrtion || FindBanner.descrtion,
  };

  let updatedBanner = await Banner.findByIdAndUpdate(params.id, updateObject, {
    new: true,
  });

  return updatedBanner;
};

module.exports = { EditBanner };
