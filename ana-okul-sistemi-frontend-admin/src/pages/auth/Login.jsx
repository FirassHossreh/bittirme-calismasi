/* style libraries */
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
/* install libraries */
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
/* imported file */
import CustomInput from "../../features/auth/components/cutom-input";
import FormTitle from "../../features/auth/components/form-title";
import { loginService } from "../../features/auth/services/login";
import { loginSchema } from "../../features/auth/validations/login-validation";
import useThemeColors from "../../hooks/useThemeColors";
import { useEffect } from "react";
import { removeToken } from "../../services/remove-token";

export default function Login() {
  useEffect(() => {
    async function remove() {
      await removeToken();
    }
    remove();
  }, []);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { primaryColor, secondaryColor, tertiaryColor, themeOption } =
    useThemeColors();
  const { values, isSubmitting, handleChange, handleSubmit, validateForm } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });
  async function onSubmit(values, actions) {
    const result = await loginService(values);
    actions.resetForm();
    if (result.status === 200) {
      navigate("/firass-layout");
    }
  }

  function handleLoginClick() {
    validateForm().then((formErrors) => {
      if (formErrors.email) {
        toast.warning(formErrors.email);
      } else if (formErrors.password) {
        toast.warning(formErrors.password);
      }
    });
  }
  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-center absolute top-0"
        style={
          themeOption === "light"
            ? { backgroundColor: "white" }
            : { backgroundColor: "#002347" }
        }
      >
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
                onClick={handleLoginClick}
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
                <Link to="/teacher-registration">
                  {t("for-teacher-register")}
                </Link>
              </Button>
            </div>
          </form>
        </Box>
      </div>
    </>
  );
}
