import React, { useEffect, useState } from "react";
import { MenuItem, FormControl, Select } from "@mui/material";
import i18n from "../config/i18n";

const LanguageSelector = () => {
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    localStorage.setItem("language-option", language);
    i18n.changeLanguage(language);
  }, [language]);

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <FormControl>
      <Select value={language} onChange={handleChange}>
        <MenuItem value="tr">Türkçe</MenuItem>
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ar">العربية</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
