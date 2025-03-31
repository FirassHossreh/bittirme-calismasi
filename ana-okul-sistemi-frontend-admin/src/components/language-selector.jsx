import React, { useEffect, useState } from "react";
import { MenuItem, FormControl, Select } from "@mui/material";
import i18n from "../config/i18n";
import useThemeColors from "../hooks/useThemeColors";
import { useDispatch } from "react-redux";
import { handleLanguageChange } from "../store/slices/LanguageSlice";
const LanguageSelector = () => {
  const dispatch = useDispatch();
  const [language, setLanguage] = useState(i18n.language);
  const { themeOption } = useThemeColors();
  useEffect(() => {
    localStorage.setItem("language-option", language);
    i18n.changeLanguage(language);
  }, [language]);

  const handleChange = (event) => {
    setLanguage(event.target.value);
    dispatch(handleLanguageChange(event.target.value));
  };

  return (
    <FormControl
      sx={{
        "& .MuiOutlinedInput-root": {
          color: themeOption === "light" ? "" : "white",
          "& fieldset": {
            borderColor: themeOption === "light" ? "" : "white",
          },
          "&:hover fieldset": {
            borderColor: themeOption === "light" ? "" : "white",
          },
        },
        "& .MuiSelect-icon": {
          color: themeOption === "light" ? "" : "white",
        },
      }}
    >
      <Select value={language} onChange={handleChange}>
        <MenuItem value="tr">Türkçe</MenuItem>
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ar">العربية</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
