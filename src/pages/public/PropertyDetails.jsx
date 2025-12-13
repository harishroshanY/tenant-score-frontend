import { useParams } from "react-router-dom";
import properties from "../../data/properties";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find(
    (p) => p.id === Number(id)
  );

  if (!property) return <p>Property not found</p>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-2">
        {property.name}
      </h1>
      <p className="text-gray-500">
        {property.location}
      </p>
      <p className="mt-4 font-semibold">
        Rent: {property.rent}
      </p>
      <p className="mt-2">
        Status: {property.status}
      </p>
    </div>
  );
}
