import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useAuth } from "../../utils/authContext";
import toast from "react-hot-toast";

export default function TenantDashboard() {
  const { user } = useAuth();
  const [properties, setProperties] = useState([]);
  const [requests, setRequests] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    aadhaar: "",
    address: "",
    occupation: "",
    familyMembers: "",
    emergencyContact: "",
  });

  // 🔥 REALTIME PROPERTIES
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "properties"), (snap) => {
      setProperties(
        snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => unsub();
  }, []);

  // 🔥 REALTIME MY REQUESTS
  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "rentRequests"),
      where("tenantId", "==", user.uid)
    );

    const unsub = onSnapshot(q, (snap) => {
      setRequests(
        snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => unsub();
  }, [user]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleApply = async () => {
    if (Object.values(form).some((v) => !v)) {
      toast.error("Fill all details");
      return;
    }

    try {
      await addDoc(collection(db, "rentRequests"), {
        ...form,
        tenantId: user.uid,
        tenantEmail: user.email,
        landlordId: selectedProperty.landlordId,
        propertyId: selectedProperty.id,
        status: "pending",
        createdAt: serverTimestamp(),
      });

      toast.success("Application sent");
      setSelectedProperty(null);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-white">
      <h1 className="text-3xl font-bold">
        Welcome, {user?.displayName || user?.email}
      </h1>

      {/* STATUS */}
      <h2 className="mt-12 text-xl font-semibold">My Applications</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {requests.map((r) => (
          <div key={r.id} className="bg-white/5 p-5 rounded-xl">
            <p className="font-semibold">{r.fullName}</p>
            <span
              className={`inline-block mt-3 px-3 py-1 rounded-full text-xs
                ${
                  r.status === "approved"
                    ? "bg-green-600/20 text-green-400"
                    : r.status === "rejected"
                    ? "bg-red-600/20 text-red-400"
                    : "bg-yellow-600/20 text-yellow-400"
                }`}
            >
              {r.status.toUpperCase()}
            </span>
          </div>
        ))}
      </div>

      {/* PROPERTIES */}
      <h2 className="mt-16 text-xl font-semibold">Available Properties</h2>

      <div className="grid md:grid-cols-3 gap-8 mt-6">
        {properties.map((p) => (
          <div key={p.id} className="bg-white/5 p-4 rounded-xl">
            <img src={p.image} className="h-40 w-full object-cover rounded" />
            <h3 className="mt-3 font-semibold">{p.title}</h3>
            <p className="text-gray-400">{p.location}</p>
            <p className="text-blue-400 mt-2">₹{p.price}</p>

            <button
              onClick={() => setSelectedProperty(p)}
              className="mt-4 w-full bg-blue-600 py-2 rounded"
            >
              Apply
            </button>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-[#020617] p-8 rounded-xl w-[420px]">
            <h3 className="text-xl font-bold mb-4">Rent Application</h3>

            {Object.keys(form).map((key) => (
              <input
                key={key}
                name={key}
                placeholder={key}
                onChange={handleChange}
                className="w-full p-3 mb-3 rounded bg-white/10"
              />
            ))}

            <div className="flex gap-3 mt-4">
              <button
                onClick={handleApply}
                className="flex-1 bg-blue-600 py-2 rounded"
              >
                Submit
              </button>
              <button
                onClick={() => setSelectedProperty(null)}
                className="flex-1 bg-white/10 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
