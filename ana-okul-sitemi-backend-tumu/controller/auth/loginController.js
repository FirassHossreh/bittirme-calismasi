const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const UserModel = require("../../models/User");
const { loginValidation } = require("../../utils/validations/loginValidation");

const login = asyncHandler(async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).json({ msg: error.details[0].message });
  }
  console.log(req.body);
  const UserEmail = await UserModel.findOne({
    email: req.body.email,
  });
  const UserPassword = await UserModel.findOne({
    password: req.body.password,
  });

  if (!UserEmail) {
    return res.status(401).json({
      message: req.__("login_failed"),
    });
  }
  if (!UserPassword) {
    return res.status(401).json({
      message: req.__("login_failed"),
    });
  }
  const token = jwt.sign({ id: UserEmail._id }, process.env.SECRET_KEY, {
    expiresIn: process.env.EXPIRES,
  });
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "None" : "lax",
  });
  return res.status(200).json({ message: req.__("login_success") });
});
module.exports = { login };
