import * as Yup from "yup";

export const contactValdiation = Yup.object({
  nameAndSurname: Yup.string()
    .min(2, "En az 2 karakter olmalı")
    .required("İsim ve soyisim zorunlu"),

  email: Yup.string()
    .email("Geçerli bir e-posta giriniz")
    .required("E-posta zorunlu"),

  description: Yup.string()
    .min(5, "En az 5 karakter olmalı")
    .required("Mesaj zorunlu"),
});
