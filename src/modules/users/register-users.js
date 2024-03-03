const config = require("../../shared/config");
const Verification = require("../Verification/Verification");
const User = require("./User");
const crypto = require("crypto");

const RegisterUsers = async ({ body }) => {
  try {
    let { phone_number } = body;
    phone_number = phone_number.startsWith("+998")
      ? phone_number.slice(4)
      : phone_number;

    phone_number = phone_number.startsWith("998")
      ? phone_number.slice(3)
      : phone_number;

    let phone = await User.findOne({ phone_number: phone_number });
    if (phone) {
      const loginResponse = await fetch(
        "https://notify.eskiz.uz/api/auth/login",
        {
          method: "POST",
          body: JSON.stringify({
            email: "faxriddinboboyev1129@gmail.com",
            password: "vkzRzHgH5viQmMjZwu0kDUT8Ee2ubuJhKt26Obia",
          }),
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
        }
      );

      const loginResult = await loginResponse.json();
      const token = loginResult.data.token;
      const code = crypto.randomInt(100000, 999999);

      const sendSmsResponse = await fetch(
        "https://notify.eskiz.uz/api/message/sms/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            mobile_phone: phone_number,
            message: `${code}`,
            from: 4546,
          }),
          redirect: "follow",
        }
      );

      let existingverification = await Verification.findOne({
        user_id: phone._id,
      });
      if (!existingverification) {
        const verification = new Verification({
          code: code,
          user_id: phone._id,
          phone_number: phone_number,
        });

        await verification.save();
        return {
          success: true,
          msg: "nice",
          data: {
            user_id: phone._id,
          },
        };
      }

      await Verification.findByIdAndUpdate(
        { _id: existingverification._id },
        { code: code },
        { new: true }
      );

      return {
        success: true,
        msg: "nice",
        data: {
          user_id: phone._id,
        },
      };
    }

    const newUser = new User({
      fullname: " ",
      phone_number,
    });

    const user = await newUser.save();

    try {
      const loginResponse = await fetch(
        "https://notify.eskiz.uz/api/auth/login",
        {
          method: "POST",
          body: JSON.stringify({
            email: "faxriddinboboyev1129@gmail.com",
            password: "vkzRzHgH5viQmMjZwu0kDUT8Ee2ubuJhKt26Obia",
          }),
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
        }
      );

      const loginResult = await loginResponse.json();
      const token = loginResult.data.token;
      const code = crypto.randomInt(100000, 999999);

      const sendSmsResponse = await fetch(
        "https://notify.eskiz.uz/api/message/sms/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            mobile_phone: phone_number,
            message: `${code}`,
            from: 4546,
          }),
          redirect: "follow",
        }
      );

      let existingverification = await Verification.findOne({
        user_id: user._id,
      });
      if (!existingverification) {
        const verification = new Verification({
          code: code,
          user_id: user._id,
          phone_number: phone_number,
        });
        await verification.save();
        return {
          success: true,
          msg: "Success",
          data: { user_id: user._id },
        };
      }

      await Verification.findByIdAndUpdate(
        { _id: existingverification._id },
        { code: code },
        { new: true }
      );
      return {
        success: true,
        msg: "Success",
        data: { user_id: user._id },
      };
    } catch (error) {
      return { message: error.message };
    }
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = { RegisterUsers };
