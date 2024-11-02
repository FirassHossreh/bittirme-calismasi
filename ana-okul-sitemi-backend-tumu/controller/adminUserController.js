const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const adminUserModel = require("../models/AdminUser");
const { loginValidation } = require("../utils/validations/loginValidation");
const AdminUserModel = require("../models/AdminUser");

const login = asyncHandler(async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).json({ msg: error.details[0].message });
  }
  console.log(req.body);
  const adminUserEmail = await adminUserModel.findOne({
    email: req.body.email,
  });
  const adminUserPassword = await adminUserModel.findOne({
    password: req.body.password,
  });

  if (!adminUserEmail) {
    return res.status(401).json({
      msg: "Your password or email is incorrect",
    });
  }
  if (!adminUserPassword) {
    return res.status(401).json({
      msg: "your password or email is incorrect",
    });
  }
  const token = jwt.sign({ id: adminUserEmail._id }, process.env.SECRET_KEY, {
    expiresIn: process.env.EXPIRES,
  });
  return res.status(200).json({ adminUserEmail, token });
});

module.exports = {
  login,
};
