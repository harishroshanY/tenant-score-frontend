import { Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import EditProperty from "./pages/landlord/EditProperty";

import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import Signup from "./pages/public/Signup";
import PropertyList from "./pages/public/PropertyList";
import PropertyDetails from "./pages/public/PropertyDetails";
import VerifyEmail from "./pages/public/VerifyEmail";

import TenantDashboard from "./pages/tenant/Dashboard";
import LandlordDashboard from "./pages/landlord/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import AddProperty from "./pages/landlord/AddProperty";

import ProtectedRoute from "./utils/ProtectedRoute";

export default function App() {
  return (
    <Routes>

      {/* 🌐 PUBLIC WEBSITE */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/properties" element={<PropertyList />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Route>

      {/* 🧑 TENANT */}
      <Route
        path="/tenant/dashboard"
        element={
          <ProtectedRoute role="tenant">
            <TenantDashboard />
          </ProtectedRoute>
        }
      />

      {/* 🏠 LANDLORD */}
      <Route
        path="/landlord/dashboard"
        element={
          <ProtectedRoute role="landlord">
            <LandlordDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/landlord/add-property"
        element={
          <ProtectedRoute role="landlord">
            <AddProperty />
          </ProtectedRoute>
        }
      />
<Route
  path="/landlord/edit-property/:id"
  element={
    <ProtectedRoute role="landlord">
      <EditProperty />
    </ProtectedRoute>
  }
/>
      {/* 🛠 ADMIN */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}
