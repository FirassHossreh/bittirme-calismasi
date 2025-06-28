import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { store } from "./store/store";
import reportWebVitals from "./reportWebVitals";
import ToastConfig from "./components/toast-config";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <ToastConfig />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
