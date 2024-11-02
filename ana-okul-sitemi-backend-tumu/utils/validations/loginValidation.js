const joi = require("joi");
const loginValidation = (obj) => {
  const loginValidationSchema = joi.object({
    email: joi.string().required().email().trim(),
    password: joi.string().trim().required(),
  });
  return loginValidationSchema.validate(obj);
};
module.exports = {
  loginValidation,
};
