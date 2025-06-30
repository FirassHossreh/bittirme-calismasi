const Joi = require("joi");
function childRegistrationApplicationValidation(data) {
  const schema = Joi.object({
    parentId: Joi.string().required(),

    childFirstName: Joi.string().min(2).max(50).trim().required(),
    childSurName: Joi.string().min(2).max(50).trim().required(),

    gender: Joi.string().valid("Erkek", "Kız").required(),

    birthDate: Joi.string().required(),

    age: Joi.number().integer().min(0).max(150).required(),

    motherName: Joi.string().min(2).max(50).trim().required(),
    fatherName: Joi.string().min(2).max(50).trim().required(),

    address: Joi.string().min(5).max(255).trim().required(),

    parentEmail: Joi.string().email().required(),
    parentPhone: Joi.string()
      .pattern(/^[0-9+\-()\s]{10,20}$/)
      .required(),

    status: Joi.string()
      .valid("pending", "approved", "rejected")
      .default("pending"),
  });

  return schema.validate(data, { abortEarly: false });
}

module.exports = {
  childRegistrationApplicationValidation,
};
