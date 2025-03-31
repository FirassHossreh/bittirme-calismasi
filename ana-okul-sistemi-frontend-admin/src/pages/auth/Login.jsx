/* Style Operations */
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
/* Logic Operations */
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import CustomInput from "../../features/auth/components/cutom-input";
import FormTitle from "../../features/auth/components/form-title";
import { loginService } from "../../features/auth/services/login";
import { loginSchema } from "../../features/auth/validations/login-validation";
import { useEffect, useState } from "react";
import LanguageSelector from "../../components/language-selector";
import AuthLogo from "../../features/auth/components/auth-logo";
import { useTranslation } from "react-i18next";
import i18n from "../../config/i18n";
import ThemeSelector from "../../components/theme-selector";
import useThemeColors from "../../hooks/useThemeColors";

export default function Login() {
  const { t } = useTranslation();
  const { primaryColor, secondaryColor, tertiaryColor, themeOption } =
    useThemeColors();
  const languageOption = i18n.language;
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });
  const [response, setResponse] = useState("");
  async function onSubmit(values, actions) {
    setResponse(await loginService(values));
    actions.resetForm();
  }
  useEffect(() => {
    console.log(response);
  }, [response]);
  function buttonClick() {
    if (errors.email) {
      toast.error(errors.email);
    } else if (errors.password) {
      toast.error(errors.password);
    }
  }
  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-center relative"
        dir={languageOption === "ar" ? "rtl" : "ltr"}
        style={
          themeOption === "light"
            ? { backgroundColor: "white" }
            : { backgroundColor: "#002347" }
        }
      >
        <div className="flex items-center absolute justify-between top-0 w-full">
          <div className="w-24 h-24 m-2">
            <AuthLogo />
          </div>
          <div className="mx-4 flex items-center gap-4">
            <ThemeSelector />
            <LanguageSelector />
          </div>
        </div>
        <Box
          sx={{
            backgroundColor: primaryColor,
            width: "24rem",
            borderRadius: "0.25rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <form
            className="flex flex-col items-center w-[300px] "
            onSubmit={handleSubmit}
          >
            <FormTitle title={"login"} />
            <CustomInput
              onChange={handleChange}
              value={values.email}
              name={"email"}
              label={t("email")}
              placeholder={t("email-place-holder")}
              variant={"email"}
            />

            <CustomInput
              onChange={handleChange}
              value={values.password}
              name={"password"}
              label={t("password")}
              placeholder={t("password-place-holder")}
              variant={"password"}
            />

            <Link
              className={`text-sm text-secondary-dark-color self-start mt-[20px] `}
            >
              {t("forgot-password")}
            </Link>
            <div className="flex justify-between my-7 gap-3 w-full">
              <Button
                variant="contained"
                sx={{
                  color: secondaryColor,
                  backgroundColor: tertiaryColor,
                  flex: "1",
                }}
                type="submit"
                onClick={buttonClick}
                disabled={isSubmitting}
              >
                {t("login")}
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: secondaryColor,
                  borderColor: secondaryColor,
                  fontSize: "0.625rem",
                  flex: "1",
                }}
                disabled={isSubmitting}
              >
                {t("teacher-register")}
              </Button>
            </div>
          </form>
        </Box>
      </div>
    </>
  );
}
