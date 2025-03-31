import "./App.css";
import HomePage from "./pages/home-page/HomePage";
import ToastProvider from "./providers/ToastProvider";
import AppRoutes from "./routes/app-route";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useTranslation } from "react-i18next";

const theme = createTheme({
  typography: {
    fontFamily: "'Quicksand' , sans-serif", // Burada istediğin fontu yazabilirsin
  },
});
function App() {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastProvider>
        <div className="App">
          <AppRoutes />
          {/* <HomePage /> */}
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
