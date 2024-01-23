require("dotenv/config");

const config = {
  port: process.env.PORT,
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
  },
  jwt: {
    secret: "1212",
    expire_in: "2d",
  },
  backhost: "back.joy-bor.uz",
  salt: 10,
  NOTIFY_API_LOGIN_URL: "https://notify.eskiz.uz/auth/login",
  NOTIFY_API_EMAIL: "faxriddinboboyev1129@gmail.com",
  NOTIFY_API_PASSWORD: "vkzRzHgH5viQmMjZwu0kDUT8Ee2ubuJhKt26Obia",
  NOTIFY_API_SMS_URL: "https://notify.eskiz.uz/api/message/sms/send",
};

module.exports = config;
