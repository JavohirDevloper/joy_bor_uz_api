const { Banner } = require("./Banner");

const FindbyIdbanners = async ({ parmams }) => {
  let exstingbanner = Banner.findOne({ _id: parmams.id });
  if (!exstingbanner) {
    return "not found banner";
  }
  return exstingbanner;
};

module.exports = { FindbyIdbanners };
