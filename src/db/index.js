const mongoose = require("mongoose");
const config = require("../shared/config");

const db = () => {
  mongoose
    .connect(`mongodb://127.0.0.1:27017/JoyBorUzApi`)
    .then(() => {
      console.log("SERVER CONNECTED NICE ALL WORKED :) 🫡");
    })
    .catch(() => {
      console.log("SERVER CAN NOT CONNECT 💀( ͡~ ͜ʖ ͡°)");
    });
};

module.exports = db;
