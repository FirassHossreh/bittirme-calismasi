const joi = require("joi");
const customerContactValidation = (obj) => {
  const customerContactValidationSchema = joi.object({
    nameAndSurname: joi.string().min(2).required(),
    email: joi.string().email().required(),
    description: joi.string().min(5).required(),
  });
  return customerContactValidationSchema.validate(obj);
};
module.exports = {
  customerContactValidation,
};
