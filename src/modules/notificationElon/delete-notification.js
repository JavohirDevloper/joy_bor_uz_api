const { NotFoundError } = require("../../shared/errors");
const NotficationElonModel = require("./NotificationElon");

const DeleteNotification = async ({ params }) => {
  let existingNotification = await NotficationElonModel.findById(params.id);

  if (!existingNotification) {
    throw new NotFoundError("Notification not found");
  }

  await NotficationElonModel.findByIdAndRemove({ _id: params.id });

  return { message: "Notification deleted" };
};

module.exports = DeleteNotification;
