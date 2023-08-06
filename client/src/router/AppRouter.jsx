import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../components/LoginPage";
import { Events } from "../components/Events";
import { RegisterPage } from "../components/RegisterPage";
import { HomeEvents } from "../components/HomeEvents";
import { ProtectedRoute } from "./ProtectedRoute";
import { ResetPassword } from "../components/ResetPassword";
import { Camera } from "../scanner/Camera";
import { CreateEvents } from "../components/CreateEvents";
import { EventDetail } from "../components/EventDetail";
import { About } from "../components/About";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomeEvents />
            </ProtectedRoute>
          }
        />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <Events />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<h1>Error 404</h1>} />
        <Route path="/barcode" element={<Camera/>} />
        <Route path="/create/event" element={<CreateEvents/>} />
        <Route path="/edit/event/:id" element={<CreateEvents/>} />
        <Route path="/detail/event" element={<EventDetail/>} />
        <Route path="/prueba" element={<Events/>} />
        <Route path="about" element={<About/>} />
      </Routes>
    </>
  );
};
