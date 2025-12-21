import { useState } from "react";
import { loginUser, loginWithGoogle, redirectByRole } from "../../utils/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await loginUser(email, password);
      await redirectByRole(res.user.uid, navigate);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const res = await loginWithGoogle();
      await redirectByRole(res.user.uid, navigate);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617]">
      <div className="bg-white/5 p-10 rounded-xl w-[400px]">
        <h2 className="text-2xl text-white mb-6">Login</h2>

        <input onChange={e=>setEmail(e.target.value)} placeholder="Email"
          className="w-full mb-3 p-3 rounded bg-white/10 text-white"/>

        <input type="password" onChange={e=>setPassword(e.target.value)} placeholder="Password"
          className="w-full mb-4 p-3 rounded bg-white/10 text-white"/>

        <button onClick={handleLogin} className="w-full bg-blue-600 py-3 rounded">
          Login
        </button>

        <button onClick={handleGoogleLogin}
          className="w-full mt-3 flex justify-center gap-2 border py-3 rounded">
          <FcGoogle /> Continue with Google
        </button>

        <p className="text-gray-400 mt-4 text-sm">
          No account? <Link to="/signup" className="text-blue-400">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
