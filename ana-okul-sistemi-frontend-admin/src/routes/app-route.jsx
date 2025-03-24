import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/login";
import HomePage from "../pages/home-page/HomePage";
import PrivateRoute from "./private-route";
import About from "../pages/about";
import NotFound from "../pages/not-found";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route index element={<Navigate to="/login" />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/about" element={<About />} />

          {/* Giriş yapanlar için 404 */}
          <Route path="*" element={<Navigate to="/notfound" />} />
          <Route path="/notfound" element={<NotFound />} />
        </Route>

        {/* Giriş yapmamışlar için 404 → direkt login'e */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}
