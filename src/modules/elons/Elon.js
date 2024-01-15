const mongoose = require("mongoose");

let type = {
  type: mongoose.SchemaTypes.String,
  required: true,
};
const ElonSchema = new mongoose.Schema({
  title: type,
  description: {
    type: mongoose.SchemaTypes.String,
    required: false,
  },
  images: [
    {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
  ],
  honalar_soni: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  uy_maydoni: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  nechinchi_qavat: {
    type: mongoose.SchemaTypes.Number,
    required: true,
  },
  uy_manzili: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "Category",
  },
  remont: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  price: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  qurilishda_ishlatilgan: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  uy_manzil_xaritada: {
    latitude: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    longitude: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
  },
  elon_holati: {
    type: mongoose.SchemaTypes.String,
    enum: ["sucses", "not_sucsus", "waiting", "no_faol"],
    default: "waiting",
  },
  elon_user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

const Elon = mongoose.model("Elon", ElonSchema);

module.exports = {
  Elon,
};
