import { Routes, Route } from "react-router-dom";
import AppLayout from "../layouts/app-layout";
import Home from "../pages/home";
import About from "../pages/about";
import Instructors from "../pages/instructors";
import Career from "../pages/career";
import CareerApplicationDetails from "../pages/career-application-details";
import CareerApplication from "../pages/career-application";
import Register from "../pages/auth/register";
import Login from "../pages/auth/login";
import Services from "../pages/services";
import EducationProgram from "../pages/education-program";
import Gallery from "../pages/gallery";
import Contact from "../pages/contact";
export default function AppRoutes({ children }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="instructors" element={<Instructors />} />
          <Route path="career">
            <Route index element={<Career />} />
            <Route
              path="career-application-details/:id"
              element={<CareerApplicationDetails />}
            />
            <Route
              path="career-application/:id"
              element={<CareerApplication />}
            />
          </Route>
          <Route path="services" element={<Services />} />
          <Route path="education-program" element={<EducationProgram />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      {children}
    </>
  );
}
