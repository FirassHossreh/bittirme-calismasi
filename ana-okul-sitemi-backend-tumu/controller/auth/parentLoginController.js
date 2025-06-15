const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const parentModel = require("../../models/parent");
const {
  parentLoginValidation,
} = require("../../utils/validations/parentLoginValidation");
const parentLogin = asyncHandler(async (req, res) => {
  const { error } = parentLoginValidation(req.body);
  if (error) {
    res.status(400).json({ msg: error.details[0].message });
  }
  const user = parentModel.findOne({ email: req.body.email });
  if (!user) {
    res.status(401).json({ msg: "Email yada Şifre hatalı" });
  }
  const ismatched = await bcrypt.compare(req.body.password, user.password);

  if (!ismatched) {
    res.status(401).json({ msg: "Email yada Şifre hatalı" });
  }
  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
    expiresIn: process.env.EXPIRES,
  });
  const secretKey = process.env.CRYPTOJS_SECRET_KEY;
  // Şifreleme (encrypt)
  const encrypted = CryptoJS.AES.encrypt(token, secretKey).toString();

  console.log("Şifreli Token:", encrypted);
});
