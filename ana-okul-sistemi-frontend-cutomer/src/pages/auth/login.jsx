/* style libraries */
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
/* install libraries */
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
/* imported file */
import CustomInput from "../../components/custom-input";
import FormTitle from "../../components/form-title";
// import { loginService } from "../../features/auth/services/login";
import { loginSchema } from "../../validations/login-validation";
import { loginService } from "../../services/auth/login";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/isAuthenticatedSlice";
import { useEffect } from "react";
import { removeTokenService } from "../../services/auth/remove-token";
// import { removeToken } from "../../services/remove-token";

export default function Login() {
  useEffect(() => {
    async function remove() {
      await removeTokenService();
    }
    remove();
  }, []);
  const navigate = useNavigate();

  const { values, isSubmitting, handleChange, handleSubmit, validateForm } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });
  const dispatch = useDispatch();
  async function onSubmit(values, actions) {
    const result = await loginService(values);
    actions.resetForm();
    if (result.status === 200) {
      navigate("/");
      dispatch(login());
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
        style={{ backgroundColor: "white" }}
      >
        <Box
          sx={{
            backgroundColor: "#007bff",
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
            <FormTitle title={"Giriş"} />
            <CustomInput
              onChange={handleChange}
              value={values.email}
              name={"email"}
              label={"E-Mail"}
              placeholder={"E-Mail adresinizi girin"}
              variant={"email"}
            />

            <CustomInput
              onChange={handleChange}
              value={values.password}
              name={"password"}
              label={"Password"}
              placeholder={"Şifrenizi girin"}
              variant={"password"}
            />

            <Link
              className={`text-sm text-secondary-dark-color self-start mt-[20px] `}
            >
              Şifremi Unuttum ?
            </Link>
            <div className="flex justify-between my-7 gap-3 w-full ">
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: "#0008ff",
                  flex: "1",
                }}
                type="submit"
                onClick={handleLoginClick}
                disabled={isSubmitting}
              >
                Giriş
              </Button>

              <Link
                to="/register"
                style={{
                  flex: "1",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    width: "100%",
                    height: "100%",
                    fontSize: "0.7rem",
                  }}
                >
                  Kayd olma
                </Button>
              </Link>
            </div>
          </form>
        </Box>
      </div>
    </>
  );
}
