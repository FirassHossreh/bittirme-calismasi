const mongoose = require("mongoose");
const ParentSchema = new mongoose.Schema(
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
      required: true,
    },
    parentType: {
      type: String,
      required: true,
    },
    child: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const ParentModel = mongoose.model("parents", ParentSchema);
module.exports = ParentModel;
