import Button from "../../components/Button";

export default function AddProperty() {
  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-4">
        Add New Property
      </h1>

      <div className="bg-white p-6 rounded shadow space-y-4">
        <input
          type="text"
          placeholder="Property Name"
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Monthly Rent"
          className="w-full border p-2 rounded"
        />

        <Button text="Add Property" />
      </div>
    </div>
  );
}
