const { NotFoundError } = require("../../shared/errors");
const NotficationElonModel = require("./NotificationElon");

const ChangeNotificationStatus = async ({ params, body }) => {
  const { read_status } = body;

  const updatedNotification = await NotficationElonModel.findOneAndUpdate(
    { _id: params.id },
    { status: read_status },
    { new: true }
  );

  if (!updatedNotification) {
    throw new NotFoundError("not found notification :(");
  }

  updatedNotification.read_status = read_status; 
  await updatedNotification.save();

  return { message: "change status", data: updatedNotification };
};

module.exports = ChangeNotificationStatus;
