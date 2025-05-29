const joi = require("joi");

const employeeRegisterValidation = (obj) => {
  const phonePrefixRegex = {
    tr: /^\+90/,
    sy: /^\+963/,
  };

  const employeeRegisterValidationSchema = joi.object({
    name: joi
      .string()
      .pattern(/^[A-Za-z]+$/)
      .message("Sadece İngilizce harfler kabul edilir.")
      .pattern(/^[^\d]+$/)
      .message("Rakamlar kabul edilmez.")
      .pattern(/^[^!@#$%^&*(),.?\":{}|<>]+$/)
      .message("Özel karakterler kabul edilmez.")
      .required()
      .messages({
        "string.empty": "Bu alan gereklidir.",
      }),

    surName: joi
      .string()
      .pattern(/^[A-Za-z]+$/)
      .message("Sadece İngilizce harfler kabul edilir.")
      .pattern(/^[^\d]+$/)
      .message("Rakamlar kabul edilmez.")
      .pattern(/^[^!@#$%^&*(),.?\":{}|<>]+$/)
      .message("Özel karakterler kabul edilmez.")
      .required()
      .messages({
        "string.empty": "Bu alan gereklidir.",
      }),

    email: joi
      .string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.empty": "Email girmek zorunludur",
        "string.email": "Lütfen geçerli bir email giriniz",
      }),

    password: joi.string().min(8).required().messages({
      "string.empty": "Şifre girmek zorunludur",
      "string.min": "Şifre en az 8 karakter olmalıdır",
    }),
    countryCode: joi.string().valid("tr", "sy").required(), // countryCode'un kendisini de alıyoruz

    number: joi
      .string()
      .required()
      .custom((value, helpers) => {
        const countryCode = obj.countryCode || "tr"; // default olarak 'tr' al
        const regex = phonePrefixRegex[countryCode];
        if (!regex.test(value)) {
          return helpers.message(
            `Telefon numarası ${
              countryCode === "tr" ? "+90" : "+963"
            } ile başlamalıdır`
          );
        }
        return value;
      })
      .messages({
        "string.empty": "Telefon numarası girmek zorunludur",
      }),

    photo: joi
      .object({
        size: joi
          .number()
          .max(2 * 1024 * 1024)
          .required(),
        originalname: joi.string().required(),
        mimetype: joi
          .string()
          .valid("image/jpeg", "image/png", "image/jpg")
          .required(),
      })
      .unknown(true)
      .required()
      .messages({
        "any.required": "Fotoğraf girmek zorunludur",
        "object.base": "Geçersiz fotoğraf dosyası",
      }),
    address: joi.string().allow(),
    birthday: joi.string().allow(),
    educationLevel: joi.string().allow(),
    department: joi.string().allow(),
  });

  return employeeRegisterValidationSchema.validate(obj, { abortEarly: false });
};

module.exports = {
  employeeRegisterValidation,
};
