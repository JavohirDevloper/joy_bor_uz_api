const user = require("./User");
const AllUsers = async () => {
  let users = await user.find({ is_deleted: false });
  return users;
};
module.exports = { AllUsers };
