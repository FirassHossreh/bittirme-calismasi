import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import HomePage from "../pages/home-page/HomePage";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="HomePage" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}
