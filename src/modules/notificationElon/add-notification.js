const { NotficationElonModel } = require("./NotificationElon");

const AddNotifiocation = async ({ body, user }) => {
  let { text, elon_id, user_id } = body;
  let createnotification = await NotficationElonModel.create({
    text,
    elon: elon_id,
    notfication_user: user_id,
    notificationCreator: user._id,
  });
  return { message: "notification create", data: createnotification };
};

module.exports = AddNotifiocation;
