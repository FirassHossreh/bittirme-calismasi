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
export default function AppRoutes({ children }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="instructors" element={<Instructors />} />
          <Route path="register" element={<Register />} />
          <Route path="career">
            <Route index element={<Career />} />
            <Route
              path="career-application-details"
              element={<CareerApplicationDetails />}
            />
            <Route path="career-application" element={<CareerApplication />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      {children}
    </>
  );
}
