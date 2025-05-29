const mongoose = require("mongoose");
const EmployeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    photo: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: false,
    },
    educationLevel: {
      type: String,
      required: false,
    },
    department: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const EmployeeModel = mongoose.model("employees", EmployeeSchema);
module.exports = EmployeeModel;
