import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import AppLayout from "../layouts/app-layout/AppLayout";
import AboutPage from "../pages/about-us/AboutUsPage";
import InstructorsPage from "../pages/instructors/InstructorsPage";
import CareerPage from "../pages/career/CareerPage";

export default function AppRoutes({ children }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="instructors" element={<InstructorsPage />} />
          <Route path="career" element={<CareerPage />} />
        </Route>
      </Routes>
      {children}
    </>
  );
}
