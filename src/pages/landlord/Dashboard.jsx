import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useAuth } from "../../utils/authContext";
import { Link } from "react-router-dom";

export default function LandlordDashboard() {
  const { user } = useAuth();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    if (!user) return;

    const fetchProperties = async () => {
      const q = query(
        collection(db, "properties"),
        where("landlordId", "==", user.uid)
      );

      const snap = await getDocs(q);
      setProperties(
        snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      );
    };

    fetchProperties();
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-white">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome, {user?.displayName || user?.email}
          </h1>
          <p className="text-gray-400 mt-1">
            Manage your properties and rentals
          </p>
        </div>

        <Link
          to="/landlord/add-property"
          className="px-6 py-3 bg-blue-600 rounded-xl font-semibold"
        >
          + Add Property
        </Link>
      </div>

      {/* PROPERTIES */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-6">My Properties</h2>

        {properties.length === 0 ? (
          <p className="text-gray-400">
            No properties added yet.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {properties.map(p => (
              <div
                key={p.id}
                className="bg-white/5 rounded-xl overflow-hidden"
              >
                <img
                  src={p.image}
                  className="h-40 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-gray-400">{p.location}</p>
                  <p className="text-blue-400 font-bold mt-2">
                    ₹{p.price}/month
                  </p>

                  <span
                    className={`inline-block mt-3 px-3 py-1 text-xs rounded-full
                      ${p.status === "available"
                        ? "bg-green-600/20 text-green-400"
                        : "bg-yellow-600/20 text-yellow-400"
                      }`}
                  >
                    {p.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
