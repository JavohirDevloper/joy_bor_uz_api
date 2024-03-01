const { hashSync } = require("bcryptjs");

const admins = [
  {
    first_name: "ayubxon",
    last_name: "rahimov",
    image: "ayubxon.png",
    role: "super_admin",
    username: "ayubxon",
    password: hashSync("12345678", 10),
    // "is_deleted":false
  },
  {
    first_name: "Javohir",
    last_name: "Muxammadiyev",
    image: "javohir.png",
    role: "super_admin",
    username: "javohir",
    password: hashSync("12345678", 10),
    // "is_deleted":false
  },
  {
    first_name: "Shaxboz",
    last_name: "Pulatov",
    image: "shaxboz.png",
    role: "super_admin",
    username: "shaxboz",
    password: hashSync("12345678", 10),
    // "is_deleted":false
  },
  {
    first_name: "Ogʻabek",
    last_name: "Tirkashov",
    image: "ogabek.png",
    role: "admin",
    username: "ogabek",
    password: hashSync("12345678", 10),
    // "is_deleted":false
  },
  {
    first_name: "admin1",
    last_name: "admin1",
    image: "admin1.png",
    role: "admin",
    username: "admin1",
    password: hashSync("12345678", 10),
    // "is_deleted":false
  },
  {
    first_name: "Javlonbek",
    last_name: "bilmadim",
    image: "javlonbek.png",
    role: "admin",
    username: "javlonbek",
    password: hashSync("12345678", 10),
    // "is_deleted":false
  },
];

module.exports = admins;
