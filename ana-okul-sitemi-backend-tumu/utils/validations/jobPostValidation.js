const Joi = require("joi");

const salaryRangeSchema = Joi.object({
  min: Joi.number().required(),
  max: Joi.number().required(),
});

const jobPostValidation = (obj) => {
  const jobPostValidationSchema = Joi.object({
    jobTitle: Joi.string().trim().required(),
    location: Joi.string().trim().required(),
    jobType: Joi.string()
      .valid("full-time", "part-time", "remote", "contract")
      .required(),
    description: Joi.string().required(),
    requirements: Joi.array().items(Joi.string()),
    salaryRange: salaryRangeSchema.optional(),
    applicationDeadline: Joi.string().optional(),
    experienceLevel: Joi.string().trim().required(),
    category: Joi.string().trim().required(),
    status: Joi.boolean().required(),
  });
  return jobPostValidationSchema.validate(obj);
};
module.exports = { jobPostValidation };
