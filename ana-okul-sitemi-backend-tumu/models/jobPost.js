const mongoose = require("mongoose");

const SalaryRangeSchema = new mongoose.Schema({
  min: { type: Number, required: true },
  max: { type: Number, required: true },
});

const JopPostSchema = new mongoose.Schema(
  {
    jobTitle: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    jobType: {
      type: String,
      required: true,
      enum: ["full-time", "part-time", "remote", "contract"],
    },
    description: { type: String, required: true },
    requirements: [{ type: String }],
    salaryRange: { type: SalaryRangeSchema, required: false },
    applicationDeadline: { type: String, required: false },
    experienceLevel: {
      type: String,
      required: true,
      trim: true,
    },
    category: { type: String, required: true, trim: true },
    status: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("jop-posts", JopPostSchema);
