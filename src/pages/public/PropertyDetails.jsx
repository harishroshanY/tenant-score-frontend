import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useAuth } from "../../utils/authContext";
import { rentProperty } from "../../utils/propertyService";
import toast from "react-hot-toast";

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, role } = useAuth();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    getDoc(doc(db, "properties", id)).then(snap => {
      if (snap.exists()) {
        setProperty({ id: snap.id, ...snap.data() });
      }
    });
  }, [id]);

  if (!property) return null;

  const handleRent = async () => {
    if (!user) return navigate("/login");

    if (role !== "tenant") {
      toast.error("Only tenants can rent properties");
      return;
    }

    try {
      await rentProperty(property.id, user.uid);
      toast.success("Property rented successfully 🎉");
      navigate("/tenant/dashboard");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-white">
      <img
        src={property.image}
        className="rounded-xl mb-8"
      />

      <h1 className="text-3xl font-bold">
        {property.title}
      </h1>

      <p className="text-gray-400 mt-2">
        {property.location}
      </p>

      <p className="text-blue-400 text-2xl mt-4">
        ₹{property.price}/month
      </p>

      <button
        onClick={handleRent}
        className="mt-8 px-8 py-3 bg-blue-600 rounded-xl"
      >
        Rent Now
      </button>
    </div>
  );
}
