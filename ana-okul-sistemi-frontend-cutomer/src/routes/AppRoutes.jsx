import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home-page/HomePage";
import AppLayout from "../layouts/app-layout/AppLayout";
import AboutPage from "../pages/about-us/AboutPage";

export default function AppRoutes({ children }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
      {children}
    </>
  );
}
