const mongoose = require("mongoose");

const type = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

const UserSchema = new mongoose.Schema(
  {
    fullname: type,
    role: {
      type: mongoose.SchemaTypes.String,
      enum: ["user"],
      default: "user",
    },
    phone_number: { type: mongoose.SchemaTypes.String, required: true },
    elons: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Elon",
      },
    ],
    saved_elons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Elon",
      },
    ],
    status: {
      type: mongoose.SchemaTypes.String,
      enum: ["active", "no_active"],
      default: "no_active",
    },
    is_deleted: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
