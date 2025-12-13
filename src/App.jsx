import { Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import TenantLayout from "./layouts/TenantLayout";
import LandlordLayout from "./layouts/LandlordLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./utils/ProtectedRoute";

import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import Signup from "./pages/public/Signup";
import PropertyList from "./pages/public/PropertyList";
import PropertyDetails from "./pages/public/PropertyDetails";
import ShortStay from "./pages/public/ShortStay";

import TenantDashboard from "./pages/tenant/Dashboard";
import Wallet from "./pages/tenant/Wallet";
import BookingsTenant from "./pages/tenant/Bookings";
import Score from "./pages/tenant/Score";
import Profile from "./pages/tenant/Profile";

import LandlordDashboard from "./pages/landlord/Dashboard";
import LandlordProperties from "./pages/landlord/Properties";
import AddProperty from "./pages/landlord/AddProperty";
import LandlordBookings from "./pages/landlord/Bookings";
import Earnings from "./pages/landlord/Earnings";
import Tenants from "./pages/landlord/Tenants";

import AdminDashboard from "./pages/admin/Dashboard";
import AdminProperties from "./pages/admin/Properties";
import Transactions from "./pages/admin/Transactions";
import Users from "./pages/admin/Users";
import ScoreControl from "./pages/admin/ScoreControl";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="properties" element={<PropertyList />} />
        <Route path="properties/:id" element={<PropertyDetails />} />
        <Route path="short-stay" element={<ShortStay />} />
      </Route>

      <Route
        path="/tenant"
        element={
          <ProtectedRoute role="tenant">
            <TenantLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<TenantDashboard />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="bookings" element={<BookingsTenant />} />
        <Route path="score" element={<Score />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route
        path="/landlord"
        element={
          <ProtectedRoute role="landlord">
            <LandlordLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<LandlordDashboard />} />
        <Route path="properties" element={<LandlordProperties />} />
        <Route path="properties/add" element={<AddProperty />} />
        <Route path="bookings" element={<LandlordBookings />} />
        <Route path="earnings" element={<Earnings />} />
        <Route path="tenants" element={<Tenants />} />
      </Route>

      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="properties" element={<AdminProperties />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="users" element={<Users />} />
        <Route path="score-control" element={<ScoreControl />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
