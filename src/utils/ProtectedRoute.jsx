import { Navigate } from "react-router-dom";
import { isAuth, getRole } from "./auth";

export default function ProtectedRoute({ children, role }) {
  if (!isAuth()) {
    return <Navigate to="/login" replace />;
  }

  if (role && getRole() !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}
