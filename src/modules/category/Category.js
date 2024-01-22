const mongoose = require("mongoose");

let CategorySChema = new mongoose.Schema({
  name: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  categry_elons: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Elon",
    },
  ],
});

let Category = mongoose.model("Category", CategorySChema);

module.exports = { Category };
