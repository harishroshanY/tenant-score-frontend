import { getRole, logout, switchRole, isAuth } from "../utils/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Header() {
  const role = getRole() || "Guest";
  const navigate = useNavigate();
  const auth = isAuth();

  const handleRoleSwitch = (newRole) => {
    if (switchRole(newRole)) {
      navigate(`/${newRole}`);
      window.location.reload();
    }
  };

  if (!auth) {
    return (
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">TenantScore</h2>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm text-blue-600 hover:underline">
            Login
          </Link>
          <Link to="/signup" className="text-sm bg-green-600 text-white px-3 py-1 rounded">
            Sign Up
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">
            Welcome, {role.charAt(0).toUpperCase() + role.slice(1)}
          </span>
          <select
            value={role}
            onChange={(e) => handleRoleSwitch(e.target.value)}
            className="border p-1 rounded text-xs"
            title="Switch role (for testing)"
          >
            <option value="tenant">Tenant</option>
            <option value="landlord">Landlord</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="text-sm text-red-500 hover:underline"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
