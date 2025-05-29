const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surName: {
      type: String,
      required: true,
    },
    gender: {
      types: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    parentMailAddress: {
      type: String,
      required: true,
    },
    parentPhoneNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const StudentModel = mongoose.model("students", StudentSchema);
module.exports = StudentModel;
