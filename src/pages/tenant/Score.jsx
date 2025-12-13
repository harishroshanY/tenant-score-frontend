export default function Score() {
  return (
    <div className="max-w-md">
      <h1 className="text-2xl font-bold mb-4">
        Tenant Score
      </h1>

      <div className="bg-white p-6 rounded shadow text-center">
        <p className="text-gray-500">Your Score</p>
        <h2 className="text-5xl font-bold text-green-600 mt-2">
          780
        </h2>

        <p className="text-sm text-gray-400 mt-3">
          Good standing – eligible for premium listings
        </p>
      </div>
    </div>
  );
}
