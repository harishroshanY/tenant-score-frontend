import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export const redirectByRole = async (uid, navigate) => {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    navigate("/login");
    return;
  }

  const { role } = snap.data();

  if (role === "tenant") navigate("/tenant/dashboard");
  else if (role === "landlord") navigate("/landlord/dashboard");
  else if (role === "admin") navigate("/admin/dashboard");
  else navigate("/");
};
