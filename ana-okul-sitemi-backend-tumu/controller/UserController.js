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

const IsAuthenticated = (req, res) => {
  const token = req.cookies["token"];
  if (!token) {
    return res.status(401).json({ message: req.__("token_invalid") });
  }
  try {
    const user = jwt.verify(token, process.env.SECRET_KEY);
    return res.status(200).json({ id: user.id, email: user.email });
  } catch (err) {
    console.error("JWT error:", err);
    return res
      .status(401)
      .json({ message: "Invalid or expired token", type: 2 });
  }
};
const removeToken = (req, res) => {
  const token = req.cookies["token"];
  if (token) {
    res.clearCookie("token");
    return res.status(200).json({ message: "Çıkış yapıldı" });
  } else {
    return res.status(200).json({ message: "zaten token yok", type: 2 });
  }
};
module.exports = {
  login,
  IsAuthenticated,
  removeToken,
};
