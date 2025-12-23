import { useEffect, useState } from "react";
import { getAvailableProperties } from "../../utils/propertyService";
import { Link } from "react-router-dom";

export default function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getAvailableProperties().then(setProperties);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-12">
        Available Properties
      </h1>

      {properties.length === 0 ? (
        <p className="text-gray-400">
          No properties available right now.
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
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-semibold">
                  {p.title}
                </h2>
                <p className="text-gray-400">
                  {p.location}
                </p>

                <p className="text-blue-400 font-bold mt-2">
                  ₹{p.price}/month
                </p>

                <Link
                  to={`/property/${p.id}`}
                  className="block mt-4 text-center py-2 bg-blue-600 rounded-lg"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
