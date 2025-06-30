const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const childRegisterationApplication = require("../models/child-registration-application");
const {
  childRegistrationApplicationValidation,
} = require("../utils/validations/childRegistrationApplicationValidation");
const createChildRegisterationApplication = asyncHandler(async (req, res) => {
  const result = jwt.verify(req.decryptedToken, process.env.SECRET_KEY);
  const year = parseInt(req.body.birthDate?.split("-")[0]);
  const age = new Date().getFullYear() - year;
  const { error } = childRegistrationApplicationValidation({
    parentId: result.id,
    childFirstName: req.body.childFirstName,
    childSurName: req.body.childSurName,
    gender: req.body.gender,
    birthDate: req.body.birthDate,
    age: age,
    motherName: req.body.motherName,
    fatherName: req.body.fatherName,
    address: req.body.address,
    parentEmail: req.body.parentEmail,
    parentPhone: req.body.parentPhone,
    status: "pending",
  });
  if (error) {
    return res.status(400).json({ msg: error.details[0].message });
  }

  const newChildRegisterationApplication =
    await childRegisterationApplication.create({
      parentId: result.id,
      childFirstName: req.body.childFirstName,
      childSurName: req.body.childSurName,
      gender: req.body.gender,
      birthDate: req.body.birthDate,
      age: age,
      motherName: req.body.motherName,
      fatherName: req.body.fatherName,
      address: req.body.address,
      parentEmail: req.body.parentEmail,
      parentPhone: req.body.parentPhone,
      status: "pending",
    });
  res.status(201).json({ msg: "basvuru olustruldu" });
});
const getChildRegisterationApplication = asyncHandler(async (req, res) => {
  const result = jwt.verify(req.decryptedToken, process.env.SECRET_KEY);
  const childRegisterationApplications =
    await childRegisterationApplication.findOne({
      parentId: result.id,
    });
  res.status(200).json(childRegisterationApplications);
});
// const getChildRegisterationApplications = asyncHandler(async (req, res) => {});
module.exports = {
  createChildRegisterationApplication,
  getChildRegisterationApplication,
};
