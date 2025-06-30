import * as Yup from "yup";

export const parentValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Ad alanı zorunludur")
    .min(2, "Ad en az 2 karakter olmalıdır"),

  surName: Yup.string()
    .required("Soyad alanı zorunludur")
    .min(2, "Soyad en az 2 karakter olmalıdır"),

  email: Yup.string()
    .required("Email zorunludur")
    .email("Geçerli bir email adresi giriniz"),
  password: Yup.string()
    .required("Şifre girmek zorunludur")
    .min(8, "Şifre en az 8 karakter olmalıdır"),
  confirmPassword: Yup.string()
    .required("Şifre tekrar girmek zorunludur")
    .oneOf([Yup.ref("password")], "Şifreler eşleşmiyor"),

  number: Yup.string()
    .required("Telefon numarası zorunludur")
    .matches(/^\+90/, "Numara +90 ile başlamalı")
    .matches(/^\+90\d{10,}$/, "+90'dan sonra en az 10 rakam olmalı"),

  address: Yup.string()
    .required("Adres zorunludur")
    .min(5, "Adres en az 5 karakter olmalıdır"),

  parentType: Yup.string()
    .required("Veli tipi zorunludur")
    .oneOf(["Anne", "Baba"], "Veli tipi 'Anne' ya da 'Baba' olmalıdır"),

  child: Yup.string()
    .required("Çocuk ismi zorunludur")
    .min(2, "Çocuk ismi en az 2 karakter olmalıdır"),
});
