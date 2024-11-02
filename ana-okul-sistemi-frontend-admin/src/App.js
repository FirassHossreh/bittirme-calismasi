import "./App.css";
import HomePage from "./pages/home-page/HomePage";
import ToastProvider from "./providers/ToastProvider";

function App() {
  return (
    <ToastProvider>
      <div className="App">
        <HomePage />
      </div>
    </ToastProvider>
  );
}

export default App;
