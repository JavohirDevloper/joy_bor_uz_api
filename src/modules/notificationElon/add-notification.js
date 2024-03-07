const { NotFoundError } = require("../../shared/errors");
const User = require("../users/User");
const NotificationElonModel = require("./NotificationElon");

const AddNotification = async ({ body, user }) => {
  let { text, elon_id, user_id } = body;
  let userElons = await User.findOne({
    _id: user_id,
    elons: elon_id,
  });

  if (!userElons) {
    throw new NotFoundError("bu elon siz tanlagan userni eloni emas :(");
  }

  let createNotification = await NotificationElonModel.create({
    text,
    elon: elon_id,
    notification_user: user_id,
    notificationCreator: user._id,
  });

  return { message: "notification created", data: createNotification };
};

module.exports = AddNotification;
