const { Banner } = require("./Banner");

const AllBanners = async () => {
  let result = await Banner.find();
  return result;
};
module.exports = { AllBanners };
