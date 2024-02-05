const { NotFoundError } = require("../../shared/errors");
const { NotficationElonModel } = require("./NotificationElon");

const DeleteNotification = async ({ params }) => {
  let ExstingNotification = await NotficationElonModel.findOne(params.id);
  if (!ExstingNotification) {
    throw new NotFoundError("not found notification");
  }
  await NotficationElonModel.deleteOne(params.id);
  return { messaage: "notification deleted" };
};
module.exports = DeleteNotification;
