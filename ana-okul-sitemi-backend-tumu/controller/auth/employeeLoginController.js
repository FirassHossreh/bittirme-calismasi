const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const employeeModel = require("../../models/employee");
const {
  employeeLoginValidation,
} = require("../../utils/validations/employeeLoginValidation");

const login = asyncHandler(async (req, res) => {
  const { error } = employeeLoginValidation(req.body);
  if (error) {
    return res.status(400).json({ msg: error.details[0].message });
  }
  const user = await employeeModel.findOne({
    email: req.body.email,
  });

  if (!user) {
    return res.status(401).json({
      message: req.__("login_failed"),
    });
  }
  const ismatched = await bcrypt.compare(req.body.password, user.password);

  if (!ismatched) {
    return res.status(401).json({
      message: req.__("login_failed"),
    });
  }
  const token = jwt.sign(
    { id: user._id, permission: user.role },
    process.env.SECRET_KEY,
    {
      expiresIn: process.env.EXPIRES,
    }
  );
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "None" : "lax",
  });
  return res.status(200).json({ message: req.__("login_success") });
});
module.exports = { login };
