import "./App.css";
import AppRoutes from "./routes/app-route";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useLanguageOption from "./hooks/useLanguageOption";

const theme = createTheme({
  typography: {
    fontFamily: "'Quicksand' , sans-serif", // Burada istediğin fontu yazabilirsin
  },
});
function App() {
  const languageOption = useLanguageOption();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App" dir={languageOption === "ar" ? "rtl" : "ltr"}>
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
