const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const employeeModel = require("../../models/employee");
const {
  employeeRegisterValidation,
} = require("../../utils/validations/employeeRegisterValidation");

const employeeRegister = asyncHandler(async (req, res) => {
  const { error } = employeeRegisterValidation({
    ...req.body,
    photo: req.file,
  });
  if (error) {
    return res.status(400).json({ msg: error.details[0].message });
  }

  const EmployeeEmail = await employeeModel.findOne({
    email: req.body.email,
  });

  if (EmployeeEmail) {
    return res.status(400).json({
      message: "Bu kullanıcı zaten mevcut",
    });
  }
  const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10;
  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

  const UserEmail = await employeeModel.create({
    name: req.body.name,
    surName: req.body.surName,
    email: req.body.email,
    password: hashedPassword,
    number: req.body.number,
    address: req.body.address,
    photo: req.file.path,
    birthday: req.body.birthday,
    educationLevel: req.body.educationLevel,
    department: req.body.department,
    role: "teacher",
  });
  const token = jwt.sign({ id: UserEmail._id }, process.env.SECRET_KEY, {
    expiresIn: process.env.EXPIRES,
  });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "None" : "lax",
  });
  return res.status(200).json({ message: "Kayıt başarılı" });
});
module.exports = { employeeRegister };
