const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const {
  parentRegisterValidation,
} = require("../../utils/validations/parentRegisterValidation");
const ParentModel = require("../../models/parent");
const CryptoJS = require("crypto-js");

const parentRegister = asyncHandler(async (req, res) => {
  const { error } = parentRegisterValidation(req.body);
  if (error) {
    return res.status(400).json({ msg: error.details[0].message });
  }

  const EmployeeEmail = await ParentModel.findOne({
    email: req.body.email,
  });

  if (EmployeeEmail) {
    return res.status(400).json({
      message: "Bu kullanıcı zaten mevcut",
    });
  }
  const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10;
  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

  const UserEmail = await ParentModel.create({
    name: req.body.name,
    surName: req.body.surName,
    email: req.body.email,
    password: hashedPassword,
    number: req.body.number,
    address: req.body.address,
    parentType: req.body.parentType,
    child: req.body.child,
  });
  const token = jwt.sign({ id: UserEmail._id }, process.env.SECRET_KEY, {
    expiresIn: process.env.EXPIRES,
  });
  const secretKey = process.env.CRYPTOJS_SECRET_KEY;
  const encrypted = CryptoJS.AES.encrypt(token, secretKey).toString();
  res.cookie("token", encrypted, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "None" : "lax",
  });
  return res.status(200).json({ message: "Kayıt başarılı" });
});
module.exports = { parentRegister };
