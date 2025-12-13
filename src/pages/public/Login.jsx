import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../utils/auth";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("tenant");

  const handleLogin = () => {
    login(role);
    // Redirect to dashboard based on role
    if (role === "landlord") {
      navigate("/landlord");
    } else if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/tenant");
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

      <input className="w-full border p-2 mb-4 rounded" placeholder="Email" />
      <input className="w-full border p-2 mb-6 rounded" placeholder="Password" type="password" />

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Login as:</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="tenant">Tenant</option>
          <option value="landlord">Landlord</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </div>
  );
}
