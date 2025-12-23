import { useState } from "react";
import { loginUser, loginWithGoogle, redirectByRole } from "../../utils/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Enter email and password");
      return;
    }

    try {
      setLoading(true);

      const res = await loginUser(email, password);

      if (!res.user.emailVerified) {
        toast.error("Please verify your email 📩");
        return;
      }

      await redirectByRole(res.user.uid, navigate);

    } catch (err) {
  if (err.code === "auth/user-not-found") {
    toast.error("User not found");
  } else if (err.code === "auth/wrong-password") {
    toast.error("Incorrect password");
  } else if (err.code === "auth/invalid-email") {
    toast.error("Invalid email address");
  } else {
    toast.error("Login failed. Try again");
  }
}
 finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const res = await loginWithGoogle();
      await redirectByRole(res.user.uid, navigate);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617]">
      <div className="bg-white/5 p-10 rounded-xl w-[400px]">

        <h2 className="text-2xl text-white mb-6">Login</h2>

        <input
          disabled={loading}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full mb-3 p-3 rounded bg-white/10 text-white"
        />

        <input
          type="password"
          disabled={loading}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full mb-4 p-3 rounded bg-white/10 text-white"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-600 py-3 rounded"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full mt-3 flex justify-center gap-2 border py-3 rounded"
        >
          {loading ? "Please wait..." : <>
            <FcGoogle /> Continue with Google
          </>}
        </button>

        <p className="text-gray-400 mt-4 text-sm">
          No account?{" "}
          <Link to="/signup" className="text-blue-400">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
