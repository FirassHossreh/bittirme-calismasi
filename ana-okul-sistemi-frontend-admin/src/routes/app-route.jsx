import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/login";
import PrivateRoute from "./private-route";
import NotFound from "../pages/not-found";
import Home from "../pages/home";
import AppLayout from "../layouts/app-layout";
import Teachers from "../pages/teachers";
import Students from "../pages/students";
import ChildApplicationCards from "../pages/child-application-cards";
import FoodList from "../pages/food-list";
import Events from "../pages/events";
import ReportsStatistics from "../pages/reports-statistics";
import Chat from "../pages/chat";
import FirassLayout from "../layouts/firass-layout";
import TeacherRegistration from "../pages/auth/teacher-registration";
import AuthLayout from "../layouts/auth-layout";
import HangmanGame from "../pages/hangman-game";
import AnimalSoundsGame from "../pages/animal-sounds-game";
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route index path="/login" element={<Login />} />
        <Route path="/teacher-registration" element={<TeacherRegistration />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="students" element={<Students />} />
          <Route path="school">
            <Route
              path="child-application-cards"
              element={<ChildApplicationCards />}
            />
            <Route path="food-list" element={<FoodList />} />
            <Route path="events" element={<Events />} />
          </Route>
          <Route path="oyunlar">
            <Route path="first-game" element={<HangmanGame />} />
            <Route path="second-game" element={<AnimalSoundsGame />} />
          </Route>
          <Route path="chat" element={<Chat />} />
          <Route path="reports-statistics" element={<ReportsStatistics />} />
          <Route path="notfound" element={<NotFound />} />
        </Route>
        <Route path="firass-layout" element={<FirassLayout />} />

        <Route path="*" element={<Navigate to="/notfound" />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
