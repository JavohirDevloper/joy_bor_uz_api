const { NotFoundError } = require("../../shared/errors");
const { NotficationElonModel } = require("./NotificationElon");

const ChangeNotificationStatus = async ({ body, params }) => {
  let ExstingNotification = await NotficationElonModel.findOne(params.id);

  if (!ExstingNotification) {
    throw new NotFoundError("not found notification :(");
  }

  ExstingNotification.status = body.read_status == false;
  ExstingNotification.save();

  return { messaage: "change status", data: ExstingNotification };
};

module.exports = ChangeNotificationStatus;
