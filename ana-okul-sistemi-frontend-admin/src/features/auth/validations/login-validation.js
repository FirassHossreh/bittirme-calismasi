import * as yub from "yup";

export const loginSchema = yub.object().shape({
  email: yub
    .string()
    .email("lutfen gecerli bir email giriniz")
    .required("email girmek zorunludur"),
  password: yub
    .string()
    .required("sifre girmek zorunludur")
    .min(2, "sifre en az 8 karakter olmalidir"),
});
