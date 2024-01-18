require("dotenv/config");

const config = {
  port: process.env.PORT,
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
  },
  jwt: {
    secret:"1212",
    expire_in: "2d",
  },
  backhost:"back.joy-bor.uz",
  salt: 10,
};

module.exports = config;
