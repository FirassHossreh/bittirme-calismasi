import "./App.css";
import HomePage from "./pages/home-page/HomePage";
import ToastProvider from "./providers/ToastProvider";
import AppRoutes from "./routes/AppRoute";

function App() {
  return (
    <ToastProvider>
      <div className="App">
        <AppRoutes />
        {/* <HomePage /> */}
      </div>
    </ToastProvider>
  );
}

export default App;
