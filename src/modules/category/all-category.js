const { Category } = require("./Category");

let AllCategry = async () => {
  let all = Category.find();
  return all;
};
module.exports = { AllCategry };
