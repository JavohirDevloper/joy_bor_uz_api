const mongoose = require("mongoose");
const config = require("../shared/config");

const db = () => {
  mongoose
    .connect(
      `mongodb+srv://rahimovayubxon48:lA0l3rsOFoxddbYr@joyboruz.pvor4db.mongodb.net/`
    )
    .then(() => {
      console.log("SERVER CONNECTED NICE ALL WORKED :) 🫡");
    })
    .catch(() => {
      console.log("SERVER CAN NOT CONNECT 💀( ͡~ ͜ʖ ͡°)");
    });
};

module.exports = db;
