import { IconButton, InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import i18n from "../../../config/i18n";
export default function CustomInput({
  onChange,
  value,
  name,
  label,
  placeholder,
  variant,
}) {
  const languageOption = i18n.language;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <>
      <TextField
        variant="standard"
        label={label}
        type={
          variant === "password" ? (showPassword ? "text" : "password") : "text"
        }
        placeholder={placeholder}
        sx={{
          width: "16rem",
          marginTop: "0.5rem",
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
          ...(languageOption === "ar"
            ? {
                input: {
                  style: { textAlign: "right", direction: "rtl" }, // Placeholder ve input metni sağa hizalı
                },
                inputLabel: {
                  style: {
                    textAlign: "right",
                    direction: "rtl",
                    width: "100%",
                    transformOrigin: "top right", // Label sağ üst köşe baz alınarak hizalansın
                    left: "auto",
                    right: 0, // Tam sağa yaslama
                  },
                },
              }
            : {}),
          ...(variant === "password"
            ? {
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
              }
            : {}),
        }}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
