import * as Yup from "yup";

export const childRegistrationApplication = Yup.object({
  childFirstName: Yup.string()
    .min(2, "İsim en az 2 karakter olmalı")
    .required("Çocuğun adı zorunludur"),

  childSurName: Yup.string()
    .min(2, "Soyadı en az 2 karakter olmalı")
    .required("Çocuğun soyadı zorunludur"),

  gender: Yup.string()
    .oneOf(["Kız", "Erkek"], "Cinsiyet seçmelisiniz")
    .required("Cinsiyet zorunludur"),

  birthDate: Yup.date()
    .max(new Date(), "Doğum tarihi bugünden ileri olamaz")
    .required("Doğum tarihi zorunludur"),

  motherName: Yup.string()
    .min(2, "Anne adı en az 2 karakter olmalı")
    .required("Anne adı zorunludur"),

  fatherName: Yup.string()
    .min(2, "Baba adı en az 2 karakter olmalı")
    .required("Baba adı zorunludur"),

  address: Yup.string()
    .min(10, "Adres en az 10 karakter olmalı")
    .required("Adres zorunludur"),

  parentEmail: Yup.string()
    .email("Geçerli bir e-posta giriniz")
    .required("Ebeveyn e-posta zorunludur"),

  parentPhone: Yup.string()
    .matches(/^05\d{9}$/, "Telefon 05xx xxx xx xx formatında olmalı")
    .required("Telefon numarası zorunludur"),
});
