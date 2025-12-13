import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>

      <input className="w-full border p-2 mb-4 rounded" placeholder="Name" />
      <input className="w-full border p-2 mb-4 rounded" placeholder="Email" />
      <input className="w-full border p-2 mb-6 rounded" placeholder="Password" type="password" />

      <button
        onClick={() => navigate("/login")}
        className="w-full bg-green-600 text-white py-2 rounded"
      >
        Create Account
      </button>
    </div>
  );
}
