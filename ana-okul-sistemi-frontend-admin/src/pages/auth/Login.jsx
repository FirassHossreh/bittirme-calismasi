/* Style Operations */
import { Button, IconButton, InputAdornment, InputLabel } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
/* Logic Operations */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../validations/auth/LoginValidation";
import { toast } from "react-toastify";

export default function Login() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });
  const [mesaj, setMesaj] = useState("");
  function onSubmit(values, actions) {
    console.log(values.email);
    console.log(actions);
  }
  function buttonClick() {}
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <Box
          className="w-96 rounded flex justify-center "
          style={{ backgroundColor: "#007bff" }}
        >
          <form
            className="flex flex-col items-center w-[300px] "
            onSubmit={handleSubmit}
          >
            <InputLabel id="label" className="!text-white my-10 !text-2xl">
              Login
            </InputLabel>
            <TextField
              variant="standard"
              label="Email"
              placeholder="Enter your Email"
              className="w-64"
              sx={{
                "& .MuiInputLabel-root.Mui-focused": {
                  color: `white`, // Focus olunca label rengi
                },
                "& .MuiInputLabel-root": {
                  color: `white`, // Label rengi
                },
                "& .MuiInputBase-input": {
                  color: `white`, // Placeholder ve input metni rengi
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: `white`, // Alt çizgi normal durumda
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: `white`, // Focus olduktan sonra alt çizgi rengi
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottomColor: `white !important`, // Hover sırasında alt çizgi rengi
                },
              }}
              value={values.email}
              name="email"
              onChange={handleChange}
            />
            {/* {errors.email && (
              <p className="text-xs w-64 text-red-800">{errors.email}</p>
            )} */}
            <TextField
              variant="standard"
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              className="w-64 !mt-2"
              sx={{
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white", // Focus olunca label rengi
                },
                "& .MuiInputLabel-root": {
                  color: "white", // Label rengi
                },
                "& .MuiInputBase-input": {
                  color: "white", // Placeholder ve input metni rengi
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "white", // Alt çizgi normal durumda
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "white", // Focus olduktan sonra alt çizgi rengi
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "white !important", // Hover sırasında alt çizgi rengi
                },
              }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                      >
                        <FontAwesomeIcon
                          icon={showPassword ? faEye : faEyeSlash}
                          className="text-lg text-white"
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              value={values.password}
              name="password"
              onChange={handleChange}
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
          <p>{mesaj}</p>
        </Box>
      </div>
    </>
  );
}
