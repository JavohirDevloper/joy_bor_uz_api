const config = require("../../shared/config");
const Verification = require("../Verification/Verification");
const User = require("./User");
const jwt = require("jsonwebtoken");

const CONFIRM = async (req, res) => {
  try {
    const { user_id, code } = req.body;

    const verificationCode = await Verification.findOne({ user_id }).sort({
      _id: -1,
    });

    if (!verificationCode) {
      return res.status(404).json({ msg: "Bunaqa user mavjud emas" });
    }

    if (verificationCode.code == code) {
      const user = await User.findOne({ _id: user_id });

      if (!user) {
        return res.status(404).json({ msg: "Bunaqa user bazada mavjud emas" });
      }

      const token = jwt.sign(
        { _id: user_id, role: user.role },
        config.jwt.secret,
        {
          expiresIn: config.jwt.expirec_in,
        }
      );

      user.status = "active";
      await user.save();

      res.status(200).json({
        msg: "Success",
        data: user,
        token: token,
      });
    } else {
      res.status(400).json({
        message: "Kodni noto'g'ri kiritilgan",
      });
    }
  } catch (error) {
    res.status(400).json({
      msg: error.message,
    });
  }
};

module.exports = { CONFIRM };
