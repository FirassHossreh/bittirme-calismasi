const mongoose = require("mongoose");
const { Schema, model, Types } = mongoose;

const childRegistrationApplicationSchema = new Schema(
  {
    parentId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    childFirstName: {
      type: String,
      required: true,
      trim: true,
    },
    childSurName: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["Erkek", "Kız"],
      required: true,
    },
    birthDate: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
      trim: true,
    },
    fatherName: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    parentEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    parentPhone: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = model(
  "child-registration-applications",
  childRegistrationApplicationSchema
);
