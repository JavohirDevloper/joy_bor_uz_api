const { NotFoundError } = require("../../shared/errors");
const { NotficationElonModel } = require("./NotificationElon");

const FindByIdNotification = async ({ params }) => {
  let ExstingNotification = await NotficationElonModel.findOne({ _id: params.id });
  if (!ExstingNotification) {
    throw new NotFoundError("notification not found");
  }
  return { message: "notification", data: ExstingNotification };
};

module.exports = FindByIdNotification;