import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("lutfen gecerli bir email giriniz")
    .required("email girmek zorunludur"),
  password: yup
    .string()
    .required("sifre girmek zorunludur")
    .min(8, "sifre en az 8 karakter olmalidir"),
});
