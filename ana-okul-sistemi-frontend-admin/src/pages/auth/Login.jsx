/* Style Operations */
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
/* Logic Operations */
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import CustomInput from "../../features/auth/components/cutom-input";
import FormTitle from "../../features/auth/components/form-title";
import { PRIMARY_COLOR } from "../../constants/colors";
import { loginSchema } from "../../features/auth/validations/login-validation";

export default function Login() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });
  function onSubmit(values, actions) {
    console.log(values.email);
    console.log(actions);
  }
  function buttonClick() {}
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <Box
          className="w-96 rounded flex justify-center"
          style={{ backgroundColor: PRIMARY_COLOR }}
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
              label={"Email"}
              placeholder={"Enter your Email"}
              variant={"email"}
            />
            {/* {errors.email && (
              <p className="text-xs w-64 text-red-800">{errors.email}</p>
            )} */}
            <CustomInput
              onChange={handleChange}
              value={values.password}
              name={"password"}
              label={"Password"}
              placeholder={"Enter your Password"}
              variant={"password"}
            />
            {/* {errors.password && (
              <p className="text-xs w-64 text-red-800">{errors.password}</p>
            )} */}
            <Link className="text-sm text-white  self-start mt-[20px] ">
              Forgot Password ?
            </Link>
            <div className="flex justify-between my-7 gap-3 w-full">
              <Button
                variant="contained"
                className="grow"
                style={{ color: "white", backgroundColor: "#0056b3" }}
                type="submit"
                onClick={buttonClick}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                className="!text-[10px]"
                style={{ color: "white", borderColor: "white" }}
              >
                ogretmen kaydi icin
              </Button>
            </div>
          </form>
        </Box>
      </div>
    </>
  );
}
