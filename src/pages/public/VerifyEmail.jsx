import { useEffect, useState } from "react";
import { auth } from "../../utils/firebase";
import { reload } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (!auth.currentUser) return;

      await reload(auth.currentUser);

      if (auth.currentUser.emailVerified) {
        clearInterval(interval);
        setVerified(true);
        toast.success("Email verified successfully 🎉");

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }

      setChecking(false);
    }, 3000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white px-4">
      <div className="max-w-md w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 text-center">

        {!verified ? (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Verify Your Email
            </h2>

            <p className="text-gray-400 mb-6">
              We have sent a verification link to your email.
              Please verify to continue.
            </p>

            <div className="flex justify-center mb-6">
              <div className="h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>

            <p className="text-sm text-gray-500">
              Waiting for confirmation...
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              Email Verified ✅
            </h2>

            <p className="text-gray-400">
              Redirecting to login page...
            </p>
          </>
        )}

      </div>
    </div>
  );
}
