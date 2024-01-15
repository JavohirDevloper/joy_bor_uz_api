const mongoose = require("mongoose");

const VerificationSchema = new mongoose.Schema({
  code: {
    type: mongoose.SchemaTypes.Number,
    required: true,
  },
  user_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  phone_number: { type: mongoose.SchemaTypes.String, required: true },
  time: {
    type: Date,
    default: Date.now,
  },
});

const Verification = mongoose.model("Verification", VerificationSchema);
module.exports = Verification;
