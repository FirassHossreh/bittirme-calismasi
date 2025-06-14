import { Routes, Route } from "react-router-dom";
import AppLayout from "../layouts/app-layout/AppLayout";
import InstructorsPage from "../pages/instructors/InstructorsPage";
import CareerPage from "../pages/career/CareerPage";
import ApplicationDetails from "../pages/application-details/ApplicationDetails";
import Application from "../pages/application/Application";
import Home from "../pages/home";
import About from "../pages/about";

export default function AppRoutes({ children }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="instructors" element={<InstructorsPage />} />
          <Route path="career">
            <Route index element={<CareerPage />} />
            <Route
              path="application-details"
              element={<ApplicationDetails />}
            />
            <Route path="application" element={<Application />} />
          </Route>
        </Route>
      </Routes>
      {children}
    </>
  );
}
