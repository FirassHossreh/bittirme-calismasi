import { IconButton } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { handleThemeChange } from "../store/slices/ThemeSlice";
export default function ThemeSelector() {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme-option");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme-option", theme);
  }, [theme]);
  function clickedTheme() {
    if (theme === "light") {
      setTheme("dark");
      dispatch(handleThemeChange("dark"));
    } else {
      setTheme("light");
      dispatch(handleThemeChange("light"));
    }
  }
  return (
    <>
      <IconButton onClick={clickedTheme}>
        {theme === "light" ? (
          <DarkModeIcon />
        ) : (
          <WbSunnyIcon style={{ color: theme === "light" ? "" : "white" }} />
        )}
      </IconButton>
    </>
  );
}
