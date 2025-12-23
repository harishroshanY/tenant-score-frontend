import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import toast from "react-hot-toast";

export default function EditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchProperty = async () => {
      const ref = doc(db, "properties", id);
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        toast.error("Property not found");
        navigate("/landlord/dashboard");
        return;
      }

      const data = snap.data();
      setTitle(data.title);
      setLocation(data.location);
      setPrice(data.price);
      setImage(data.image);
    };

    fetchProperty();
  }, [id, navigate]);

  const handleUpdate = async () => {
    try {
      await updateDoc(doc(db, "properties", id), {
        title,
        location,
        price,
        image,
      });

      toast.success("Property updated successfully ✅");
      navigate("/landlord/dashboard");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-16 text-white">
      <h2 className="text-3xl font-bold mb-6">Edit Property</h2>

      <div className="space-y-4">
        <input value={title} onChange={e => setTitle(e.target.value)}
          placeholder="Title" className="w-full p-3 bg-white/10 rounded"/>

        <input value={location} onChange={e => setLocation(e.target.value)}
          placeholder="Location" className="w-full p-3 bg-white/10 rounded"/>

        <input value={price} onChange={e => setPrice(e.target.value)}
          placeholder="Price" className="w-full p-3 bg-white/10 rounded"/>

        <input value={image} onChange={e => setImage(e.target.value)}
          placeholder="Image URL" className="w-full p-3 bg-white/10 rounded"/>
      </div>

      <button
        onClick={handleUpdate}
        className="mt-6 w-full bg-blue-600 py-3 rounded-xl"
      >
        Update Property
      </button>
    </div>
  );
}
