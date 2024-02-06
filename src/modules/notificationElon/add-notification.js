const { NotFoundError } = require("../../shared/errors");
const User = require("../users/User");
const { NotficationElonModel } = require("./NotificationElon");

const AddNotifiocation = async ({ body, user }) => {
  let { text, elon_id, user_id } = body;
  let userElons = await User.findOne({
    user_id,
    $and: [{ elons: { $elemMent: elon_id } }],
  });
  if (!userElons) {
    throw new NotFoundError("bu elon siz tanlagan userni eloni emas :(");
  }
  let createnotification = await NotficationElonModel.create({
    text,
    elon: elon_id,
    notfication_user: user_id,
    notificationCreator: user._id,
  });

  return { message: "notification create", data: createnotification };
};

module.exports = AddNotifiocation;
