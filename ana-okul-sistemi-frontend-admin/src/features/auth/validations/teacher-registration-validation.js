import * as yup from "yup";

export const teacherRegistrationSchema = (countryCode) => {
  const phonePrefixRegex = {
    tr: /^\+90/,
    sy: /^\+963/,
  };
  // debugger;
  return yup.object().shape({
    name: yup
      .string()
      .required("Bu alan gereklidir.")
      .matches(/^[A-Za-z]+$/, "Sadece İngilizce harfler kabul edilir.")
      .matches(/^[^\d]+$/, "Rakamlar kabul edilmez.")
      .matches(/^[^!@#$%^&*(),.?":{}|<>]+$/, "Özel karakterler kabul edilmez."),
    surName: yup
      .string()
      .required("Bu alan gereklidir.")
      .matches(/^[A-Za-z]+$/, "Sadece İngilizce harfler kabul edilir.")
      .matches(/^[^\d]+$/, "Rakamlar kabul edilmez.")
      .matches(/^[^!@#$%^&*(),.?":{}|<>]+$/, "Özel karakterler kabul edilmez."),
    email: yup
      .string()
      .required("email girmek zorunludur")
      .email("Lütfen geçerli bir email giriniz"),
    password: yup
      .string()
      .required("Şifre girmek zorunludur")
      .min(8, "Şifre en az 8 karakter olmalıdır"),
    confirmPassword: yup
      .string()
      .required("Şifre tekrar girmek zorunludur")
      .oneOf([yup.ref("password")], "Şifreler eşleşmiyor"),
    number: yup
      .string()
      .required("Telefon numarası girmek zorunludur")
      .matches(
        phonePrefixRegex[countryCode],
        `Telefon numarası ${countryCode === "tr" ? "+90" : "+963"} ile başlamalıdır`
      ),
    photo: yup
      .mixed()
      .required("Fotograf girmek zorunludur")
      .test("fileSize", "Fotoğraf en fazla 2MB olabilir", (value) => {
        const maxSize = 2 * 1024 * 1024;
        return value.size <= maxSize;
      }),
  });
};
