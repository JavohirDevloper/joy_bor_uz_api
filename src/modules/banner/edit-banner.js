const { NotFoundError, BadRequestError } = require("../../shared/errors");
const { Banner } = require("./Banner");

const EditBanner = async ({ params, body, file }) => {
  let FindBanner = await Banner.findById(params.id);

  if (!FindBanner) {
    throw new NotFoundError("user not found");
  }

  let exstingNameBanner = await Banner.findOne(body.title);

  if (exstingNameBanner) {
    throw new BadRequestError("banner already created");
  }

  let updateObject = {
    title: body.title ? body.title : FindBanner.title,
    descrtion: body.descrtion ? body.descrtion : FindBanner.descrtion,
  };
  let updateBanner = await Banner.findByIdAndUpdate(
    params.id,
    {
      updateObject,
    },
    { new: true }
  );

  return updateBanner;
};

module.exports = { EditBanner };
