import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useAuth } from "../../utils/authContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AddProperty() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !location || !price || !image) {
      toast.error("Fill all fields");
      return;
    }

    try {
      await addDoc(collection(db, "properties"), {
        title,
        location,
        price: Number(price),
        image,
        status: "available",
        landlordId: user.uid,
        createdAt: serverTimestamp(),
      });

      toast.success("Property added successfully 🏠");

      setTimeout(() => {
        navigate("/landlord/dashboard");
      }, 1200);

    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-white">
      <h1 className="text-3xl font-bold mb-8">Add Property</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          placeholder="Property Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded bg-white/10"
        />

        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-3 rounded bg-white/10"
        />

        <input
          type="number"
          placeholder="Monthly Rent"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-3 rounded bg-white/10"
        />

        <input
          placeholder="Image URL (Unsplash)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-3 rounded bg-white/10"
        />

        <button
          type="submit"
          className="px-8 py-3 bg-blue-600 rounded-xl"
        >
          Add Property
        </button>
      </form>
    </div>
  );
}
