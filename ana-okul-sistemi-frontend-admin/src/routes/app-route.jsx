import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/login";
import HomePage from "../pages/home-page/HomePage";
import PrivateRoute from "./private-route";
import NotFound from "../pages/not-found";
import Home from "../pages/home";
import AppLayout from "../layouts/app-layout";
import Teachers from "../pages/teachers";
import Students from "../pages/students";
import LessonSchedule from "../pages/lesson-schedule";
import FoodList from "../pages/food-list";
import Events from "../pages/events";
import ReportsStatistics from "../pages/reports-statistics";
import Chat from "../pages/chat";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="students" element={<Students />} />
          <Route path="school">
            <Route path="lesson-schedule" element={<LessonSchedule />} />
            <Route path="food-list" element={<FoodList />} />
            <Route path="events" element={<Events />} />
          </Route>
          <Route path="chat" element={<Chat />} />
          <Route path="reports-statistics" element={<ReportsStatistics />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="notfound" element={<NotFound />} />
        </Route>
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
