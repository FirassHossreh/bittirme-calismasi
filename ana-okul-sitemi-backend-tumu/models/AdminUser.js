const mongoose = require("mongoose");
const AdminUserSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);
const AdminUserModel = mongoose.model("AdminUsers", AdminUserSchema);
module.exports = AdminUserModel;
