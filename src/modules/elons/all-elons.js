const { Elon } = require("./Elon");

const AllElons = async (req) => {
  const page = parseInt(req.query.page, 10) || 1;
  const pageSize = parseInt(req.query.pageSize, 10) || 10;

  const categories = req.query.categories
    ? req.query.categories.split(",")
    : [];

  const filter = {
    elon_holati: "sucses",
    category: { $in: categories },
  };

  const skip = (page - 1) * pageSize;

  let all_elons = await Elon.find(filter)
    .populate([
      {
        path: "category",
      },
      {
        path: "elon_user",
      },
    ])
    .skip(skip)
    .limit(pageSize);

  return all_elons;
};

module.exports = { AllElons };
