export default function ScoreControl() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Tenant Score Control
      </h1>

      <div className="bg-white p-6 rounded shadow max-w-md">
        <label className="block text-sm font-medium mb-2">
          Adjust Score
        </label>
        <input
          type="number"
          className="w-full border p-2 rounded mb-4"
          placeholder="Enter score"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Update Score
        </button>
      </div>
    </div>
  );
}
