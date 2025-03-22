const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");
const { loginValidation } = require("../utils/validations/loginValidation");

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
      msg: "Your password or email is incorrect",
    });
  }
  if (!UserPassword) {
    return res.status(401).json({
      msg: "your password or email is incorrect",
    });
  }
  const token = jwt.sign({ id: UserEmail._id }, process.env.SECRET_KEY, {
    expiresIn: process.env.EXPIRES,
  });
  return res.status(200).json({ UserEmail, token });
});

module.exports = {
  login,
};
