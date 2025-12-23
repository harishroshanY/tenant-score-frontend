import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add timeout to ensure loading doesn't hang forever
    const timeout = setTimeout(() => {
      console.warn("Firebase auth timeout - setting loading to false");
      setLoading(false);
    }, 5000);

    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      clearTimeout(timeout); // Clear timeout if Firebase responds
      try {
        if (firebaseUser) {
          setUser(firebaseUser);

          // Only try to get role if Firebase is properly configured
          try {
            const snap = await getDoc(doc(db, "users", firebaseUser.uid));
            if (snap.exists()) {
              setRole(snap.data().role);
            }
          } catch (dbError) {
            console.warn("Firestore error:", dbError);
            // Set default role for demo purposes
            setRole("tenant");
          }
        } else {
          setUser(null);
          setRole(null);
        }
      } catch (error) {
        console.error("Auth context error:", error);
        setUser(null);
        setRole(null);
      }
      setLoading(false);
    });

    return () => {
      unsub();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, role, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
