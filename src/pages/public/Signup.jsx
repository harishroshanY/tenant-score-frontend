import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

import { auth, googleProvider, db } from "../../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!email || !password || !role) {
      toast.error("All fields are required");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      const res = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await sendEmailVerification(res.user);

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        email: res.user.email,
        role,
        emailVerified: false,
        createdAt: new Date(),
      });

      toast.success("Verification email sent 📩");

      setTimeout(() => {
        navigate("/verify-email");
      }, 1500);

    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    if (!role) {
      toast.error("Select Tenant or Landlord first");
      return;
    }

    try {
      setLoading(true);

      const res = await signInWithPopup(auth, googleProvider);
      const ref = doc(db, "users", res.user.uid);
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        await setDoc(ref, {
          uid: res.user.uid,
          email: res.user.email,
          name: res.user.displayName,
          role,
          emailVerified: true,
          createdAt: new Date(),
        });
      }

      toast.success("Account created successfully 🎉");
      setTimeout(() => navigate("/login"), 1200);

    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020617] to-[#0F172A] px-4">
      <motion.div className="max-w-5xl w-full grid md:grid-cols-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">

        <div className="p-10">
          <h2 className="text-3xl font-bold text-white">Create Account</h2>

          <div className="mt-6 flex gap-4">
            {["tenant", "landlord"].map(r => (
              <button
                key={r}
                disabled={loading}
                onClick={() => setRole(r)}
                className={`flex-1 py-3 rounded-xl font-semibold
                  ${role === r ? "bg-blue-600" : "bg-white/10"}
                `}
              >
                {r.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            <input
              placeholder="Email"
              disabled={loading}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white"
            />
            <input
              type="password"
              placeholder="Password"
              disabled={loading}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white"
            />
          </div>

          <button
            onClick={handleSignup}
            disabled={loading}
            className="w-full mt-6 py-3 bg-blue-600 rounded-xl font-semibold flex justify-center"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>

          <button
            onClick={handleGoogleSignup}
            disabled={loading || !role}
            className="w-full mt-4 py-3 flex items-center justify-center gap-3 rounded-xl border"
          >
            {loading ? "Please wait..." : <>
              <FcGoogle size={22} /> Continue with Google
            </>}
          </button>

          <p className="mt-6 text-sm text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400">Login</Link>
          </p>
        </div>

        <div className="hidden md:block">
          <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
               className="h-full w-full object-cover" />
        </div>

      </motion.div>
    </div>
  );
}
