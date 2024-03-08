const { NotFoundError } = require("../../shared/errors");
const { NotficationElonModel } = require("./NotificationElon");

const ChangeNotificationStatus = async ({ params, body }) => {
  let ExstingNotification = await NotficationElonModel.findOne({
    _id: params.id,
  });

  if (!ExstingNotification) {
    throw new NotFoundError("notification not found");
  }

  ExstingNotification.status = body.read_status === true;
  await ExstingNotification.save();

  return { message: "change status", data: ExstingNotification };
};

module.exports = ChangeNotificationStatus;
