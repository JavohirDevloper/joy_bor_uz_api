const mongoose = require("mongoose");

let NotficationElonSchema = mongoose.Schema(
  {
    notfication_user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
    elon: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    text: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    notificationCreator: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    read_status: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const NotficationElonModel = mongoose.model(
  "NotficationElon",
  NotficationElonSchema
);

module.exports = { NotficationElonModel };
