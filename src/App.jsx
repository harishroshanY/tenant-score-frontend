import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import Signup from "./pages/public/Signup";

import TenantDashboard from "./pages/tenant/Dashboard";
import LandlordDashboard from "./pages/landlord/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";

import ProtectedRoute from "./utils/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* TENANT */}
        <Route
          path="/tenant/dashboard"
          element={
            <ProtectedRoute role="tenant">
              <TenantDashboard />
            </ProtectedRoute>
          }
        />

        {/* LANDLORD */}
        <Route
          path="/landlord/dashboard"
          element={
            <ProtectedRoute role="landlord">
              <LandlordDashboard />
            </ProtectedRoute>
          }
        />

        {/* ADMIN */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
