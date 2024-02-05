const { NotficationElonModel } = require("./NotificationElon");

const AllNotfication = async () => {
  let all = await NotficationElonModel.find();
  return { message: "all notifications", data: all };
};

module.exports = AllNotfication;
