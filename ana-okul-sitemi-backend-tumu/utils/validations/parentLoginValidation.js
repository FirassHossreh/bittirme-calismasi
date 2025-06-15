const joi = require("joi");
const parentLoginValidation = (obj) => {
  const parentLoginValidationSchema = joi.object({
    email: joi.string().required().email().trim(),
    password: joi.string().trim().required(),
  });
  return parentLoginValidationSchema.validate(obj);
};
module.exports = {
  parentLoginValidation,
};
