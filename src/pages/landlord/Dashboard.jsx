import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useAuth } from "../../utils/authContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function LandlordDashboard() {
  const { user } = useAuth();

  const [properties, setProperties] = useState([]);
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);

  // 🔥 REALTIME PROPERTIES
  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "properties"),
      where("landlordId", "==", user.uid)
    );

    const unsub = onSnapshot(q, (snap) => {
      setProperties(
        snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => unsub();
  }, [user]);

  // 🔥 REALTIME RENT REQUESTS
  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "rentRequests"),
      where("landlordId", "==", user.uid)
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

  // APPROVE
  const approveRequest = async (r) => {
    try {
      await updateDoc(doc(db, "rentRequests", r.id), {
        status: "approved",
      });

      await updateDoc(doc(db, "properties", r.propertyId), {
        status: "rented",
        tenantId: r.tenantId,
      });

      toast.success("Tenant approved ✅");
      setSelectedRequest(null);
    } catch (err) {
      toast.error(err.message);
    }
  };

  // REJECT
  const rejectRequest = async (id) => {
    try {
      await updateDoc(doc(db, "rentRequests", id), {
        status: "rejected",
      });

      toast.success("Request rejected ❌");
      setSelectedRequest(null);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-white">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome, {user?.displayName || user?.email}
          </h1>
          <p className="text-gray-400">Manage properties & tenant requests</p>
        </div>

        <Link
          to="/landlord/add-property"
          className="px-6 py-3 bg-blue-600 rounded-xl"
        >
          + Add Property
        </Link>
      </div>

      {/* PROPERTIES */}
      <h2 className="mt-14 text-xl font-semibold">My Properties</h2>

      <div className="grid md:grid-cols-3 gap-8 mt-6">
        {properties.map((p) => (
          <div key={p.id} className="bg-white/5 rounded-xl overflow-hidden">
            <img src={p.image} className="h-40 w-full object-cover" />
            <div className="p-5">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-gray-400">{p.location}</p>
              <p className="text-blue-400 font-bold mt-2">₹{p.price}</p>

              <span
                className={`inline-block mt-3 px-3 py-1 rounded-full text-xs
                  ${
                    p.status === "available"
                      ? "bg-green-600/20 text-green-400"
                      : "bg-yellow-600/20 text-yellow-400"
                  }`}
              >
                {p.status}
              </span>

              <Link
                to={`/landlord/edit-property/${p.id}`}
                className="block mt-4 text-center bg-white/10 py-2 rounded"
              >
                Edit Property
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* TENANT REQUESTS */}
      <h2 className="mt-20 text-xl font-semibold">Tenant Requests</h2>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {requests.map((r) => (
          <div key={r.id} className="bg-white/5 p-6 rounded-xl">
            <h3 className="font-semibold text-lg">{r.fullName}</h3>
            <p className="text-sm text-gray-400">{r.occupation}</p>
            <p className="text-sm mt-2">📞 {r.phone}</p>

            <span
              className={`inline-block mt-3 px-3 py-1 rounded-full text-xs
                ${
                  r.status === "pending"
                    ? "bg-yellow-600/20 text-yellow-400"
                    : r.status === "approved"
                    ? "bg-green-600/20 text-green-400"
                    : "bg-red-600/20 text-red-400"
                }`}
            >
              {r.status.toUpperCase()}
            </span>

            <button
              onClick={() => setSelectedRequest(r)}
              className="mt-4 w-full bg-white/10 py-2 rounded hover:bg-white/20"
            >
              View Full Details
            </button>

            {r.status === "pending" && (
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => approveRequest(r)}
                  className="flex-1 bg-green-600 py-2 rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => rejectRequest(r.id)}
                  className="flex-1 bg-red-600 py-2 rounded"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 🔍 VIEW DETAILS MODAL */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#020617] p-8 rounded-xl w-[500px]">
            <h3 className="text-xl font-bold mb-6">Tenant Full Details</h3>

            <div className="space-y-2 text-sm text-gray-300">
              <p><b>Name:</b> {selectedRequest.fullName}</p>
              <p><b>Email:</b> {selectedRequest.tenantEmail}</p>
              <p><b>Phone:</b> {selectedRequest.phone}</p>
              <p><b>Aadhaar:</b> {selectedRequest.aadhaar}</p>
              <p><b>Address:</b> {selectedRequest.address}</p>
              <p><b>Occupation:</b> {selectedRequest.occupation}</p>
              <p><b>Family Members:</b> {selectedRequest.familyMembers}</p>
              <p><b>Emergency Contact:</b> {selectedRequest.emergencyContact}</p>
            </div>

            <div className="flex gap-3 mt-6">
              {selectedRequest.status === "pending" && (
                <>
                  <button
                    onClick={() => approveRequest(selectedRequest)}
                    className="flex-1 bg-green-600 py-2 rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => rejectRequest(selectedRequest.id)}
                    className="flex-1 bg-red-600 py-2 rounded"
                  >
                    Reject
                  </button>
                </>
              )}

              <button
                onClick={() => setSelectedRequest(null)}
                className="flex-1 bg-white/10 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
