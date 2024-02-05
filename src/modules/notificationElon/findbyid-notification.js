const { NotFoundError } = require("../../shared/errors");
const { NotficationElonModel } = require("./NotificationElon");

const FindByIdNotification = async ({ params }) => {
  let ExstingNotification = await NotficationElonModel.findOne(params.id);
  if (!ExstingNotification) {
    throw new NotFoundError("notification not found");
  }
  return { messsage: "notification", data: ExstingNotification };
};

module.exports = FindByIdNotification;
