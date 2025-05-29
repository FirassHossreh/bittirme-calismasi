const joi = require("joi");
const employeeLoginValidation = (obj) => {
  const employeeLoginValidationSchema = joi.object({
    email: joi.string().required().email().trim(),
    password: joi.string().trim().required(),
  });
  return employeeLoginValidationSchema.validate(obj);
};
module.exports = {
  employeeLoginValidation,
};
