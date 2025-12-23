import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useAuth } from "../../utils/authContext";

export default function TenantDashboard() {
  const { user } = useAuth();
  const [rented, setRented] = useState([]);

  useEffect(() => {
    if (!user) return;

    const fetchRented = async () => {
      const q = query(
        collection(db, "properties"),
        where("tenantId", "==", user.uid)
      );

      const snap = await getDocs(q);
      setRented(snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })));
    };

    fetchRented();
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-white">
      <h1 className="text-3xl font-bold">
        My Rented Properties
      </h1>

      {rented.length === 0 ? (
        <p className="text-gray-400 mt-6">
          You have not rented any property yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {rented.map(p => (
            <div key={p.id} className="bg-white/5 rounded-xl">
              <img src={p.image} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-blue-400 mt-2">
                  ₹{p.price}/month
                </p>
                <span className="inline-block mt-3 text-green-400">
                  Active Rental
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
