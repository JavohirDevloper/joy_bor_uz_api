const Verification = require("../Verification/Verification");

const ChangeNumber = async (req, res, next) => {
  const { old_number, new_number } = req.body;

  try {
    const existingUser = await User.findOne({ phone_number: old_number });
    console.log(existingUser);
    if (!existingUser) {
      return res
        .status(400)
        .json({ message: "Telefon raqam ro'yhatdan o'tmagan" });
    }

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
    let cut_phone = new_number;

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
      data: existingUser,
    });

    let existingverification = await Verification.findOne({
      user_id: existingUser._id,
    });

    if (!existingverification) {
      const verification = new Verification({
        code: code,
        user_id: existingUser._id,
        phone_number: new_number,
      });
      await verification.save();
    }

    let verificationupdate = await Verification.findByIdAndUpdate(
      { _id: existingverification._id },
      { code: code, phone_number: new_number },
      { new: true }
    );
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = { ChangeNumber };
