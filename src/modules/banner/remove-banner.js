const { NotFoundError } = require("../../shared/errors");
const { Banner } = require("./Banner");

const RemoveBanner = async ({ params }) => {
  let exstingBanner = await Banner.findById(params.id);
  if (!exstingBanner) {
    throw new NotFoundError("banner not found ");
  }
  let UpdateBanner = await Banner.findByIdAndUpdate(params.id, {
    is_deleted: true,
  });
  return UpdateBanner;
};
module.exports = { RemoveBanner };
