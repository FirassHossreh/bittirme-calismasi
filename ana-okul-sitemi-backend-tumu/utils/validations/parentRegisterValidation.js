const Joi = require("joi");

const parentRegisterValidation = (obj) => {
  const parentRegisterValidationSchema = Joi.object({
    name: Joi.string().min(2).required().messages({
      "string.base": "Ad metin olmalıdır",
      "string.empty": "Ad alanı boş bırakılamaz",
      "string.min": "Ad en az 2 karakter olmalıdır",
      "any.required": "Ad alanı zorunludur",
    }),

    surName: Joi.string().min(2).required().messages({
      "string.base": "Soyad metin olmalıdır",
      "string.empty": "Soyad alanı boş bırakılamaz",
      "string.min": "Soyad en az 2 karakter olmalıdır",
      "any.required": "Soyad alanı zorunludur",
    }),

    email: Joi.string().email().required().messages({
      "string.email": "Geçerli bir email adresi giriniz",
      "string.empty": "Email alanı boş bırakılamaz",
      "any.required": "Email zorunludur",
    }),

    password: Joi.string().min(6).required().messages({
      "string.min": "Şifre en az 6 karakter olmalıdır",
      "string.empty": "Şifre alanı boş bırakılamaz",
      "any.required": "Şifre zorunludur",
    }),

    number: Joi.string()
      .pattern(/^\+90/, { name: "startWith90" })
      .pattern(/^\+90\d{10,}$/, { name: "validTurkishNumber" })
      .required()
      .messages({
        "string.pattern.name":
          "Telefon numarası +90 ile başlamalı ve ardından en az 10 rakam içermelidir",
        "string.empty": "Telefon numarası boş bırakılamaz",
        "any.required": "Telefon numarası zorunludur",
      }),

    address: Joi.string().min(5).required().messages({
      "string.min": "Adres en az 5 karakter olmalıdır",
      "string.empty": "Adres boş bırakılamaz",
      "any.required": "Adres zorunludur",
    }),

    parentType: Joi.string().valid("Anne", "Baba").required().messages({
      "any.only": "Veli tipi yalnızca 'Anne' veya 'Baba' olabilir",
      "any.required": "Veli tipi zorunludur",
    }),

    child: Joi.string().min(2).required().messages({
      "string.min": "Çocuk ismi en az 2 karakter olmalıdır",
      "string.empty": "Çocuk ismi boş bırakılamaz",
      "any.required": "Çocuk ismi zorunludur",
    }),
  });
  return parentRegisterValidationSchema.validate(obj);
};
module.exports = {
  parentRegisterValidation,
};
