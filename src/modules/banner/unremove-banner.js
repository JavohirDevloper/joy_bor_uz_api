const { NotFoundError } = require("../../shared/errors");
const { Banner } = require("./Banner");

const UnRemoveBanner = async ({ params }) => {
  let exstingBanner = await Banner.findById({
    _id: params.id,
    is_deleted_true,
  });

  if (!exstingBanner) {
    throw new NotFoundError("not found banner!");
  }

  let updatebanner = await Banner.findByIdAndUpdate(
    { _id: params.id },
    { is_deleted: false },
    { new: true }
  );
  return updatebanner;
};

module.exports = {UnRemoveBanner}