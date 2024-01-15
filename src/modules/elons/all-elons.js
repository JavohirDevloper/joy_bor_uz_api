const { Elon } = require("./Elon");

const AllElons = async () => {
  let all_elons = await Elon.find().populate([
    {
      path: "category",
    },
    {
      path: "elon_user",
    },
  ]);
  return all_elons;
};

module.exports = { AllElons };
