const { NotFoundError } = require("../../shared/errors");
const { NotficationElonModel } = require("./NotificationElon");

const Mynotifications = async ({ user }) => {
  let ExstingNotification = await NotficationElonModel.find({
    $and: [{ notfication_user: { $elemMatch: user.id } }],
  }).populate([{ path: "elon" }, { path: "notificationCreator" }]);

  if (!ExstingNotification.length) {
    throw new NotFoundError("notifications not found");
  }
  return { message: "my notifications", data: ExstingNotification };
};

module.exports = Mynotifications;
