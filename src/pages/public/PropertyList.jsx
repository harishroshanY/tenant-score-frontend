import properties from "../../data/properties";
import { Link } from "react-router-dom";

export default function PropertyList() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Available Properties
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((p) => (
          <div
            key={p.id}
            className="bg-white p-4 rounded shadow"
          >
            <h2 className="font-bold">{p.name}</h2>
            <p className="text-gray-500">{p.location}</p>
            <p className="mt-2 font-semibold">{p.rent}</p>

            <Link
              to={`/properties/${p.id}`}
              className="text-blue-600 text-sm mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
