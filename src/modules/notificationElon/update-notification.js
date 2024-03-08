const { NotFoundError } = require("../../shared/errors");
const { NotficationElonModel } = require("./NotificationElon");

const UpdateNotification = async ({ body, params }) => {
  let ExstingNotification = await NotficationElonModel.findOne({
    _id: params.id,
  });

  if (!ExstingNotification) {
    3;
    throw new NotFoundError("not found notification");
  }

  ExstingNotification.text = body.text ? body.text : ExstingNotification.text;
  ExstingNotification.user = body.user_id
    ? body.user_id
    : ExstingNotification.user;
  ExstingNotification.elon = body.elon_id
    ? body.elon_id
    : ExstingNotification.elon;

  ExstingNotification.save();
  return { message: "udapte" };
};

module.exports = UpdateNotification;
