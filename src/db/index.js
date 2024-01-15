const mongoose = require("mongoose");
const config = require("../shared/config");

const db = () => {
  mongoose
    .connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`)
    .then(() => {
      console.log("SERVER CONNECTED NICE ALL WORKED :) 🫡");
    })
    .catch(() => {
      console.log("SERVER CAN NOT CONNECT 💀( ͡~ ͜ʖ ͡°)");
    });
};

module.exports = db;
