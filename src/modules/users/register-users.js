const config = require("../../shared/config");
const Verification = require("../Verification/Verification");
const User = require("./User");
const crypto = require("crypto");

const RegisterUsers = async (req, res, next) => {
  try {
    const { fullname, phone_number } = req.body;

    let phone = await User.findOne({ phone_number: phone_number });

    if (phone) {
      return res.status(400).json({
        message: "Bu telefon raqam avval ro'yhatdan o'tgan",
      });
    }

    const newUser = new User({
      fullname,
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

      let cut_phone = phone_number.slice(1);

      const sendSmsResponse = await fetch(
        "https://notify.eskiz.uz/api/message/sms/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            mobile_phone: cut_phone,
            message: `${code}`,
            from: 4546,
          }),
          redirect: "follow",
        }
      );

      const sendSmsResult = await sendSmsResponse.json();

      res.status(201).json({
        success: true,
        msg: "Success",
        data: user,
      });

      let existingverification = await Verification.findOne({
        user_id: existingUser._id,
      });
      if (!existingverification) {
        const verification = new Verification({
          code: code,
          user_id: existingUser._id,
          phone_number: phone_number,
        });
        await verification.save();
      }
      let verificationupdate = await Verification.findByIdAndUpdate(
        { _id: existingverification._id },
        { code: code },
        { new: true }
      );
    } catch (error) {
      res.status(400).send(`Oops error: ${error}`);
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = { RegisterUsers };
