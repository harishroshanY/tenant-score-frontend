import Button from "../../components/Button";

export default function Rent() {
  return (
    <div className="max-w-md">
      <h1 className="text-2xl font-bold mb-4">
        Pay Rent
      </h1>

      <div className="bg-white p-6 rounded shadow space-y-4">
        <div>
          <p className="text-gray-500">Monthly Rent</p>
          <h2 className="text-2xl font-bold">₹12,000</h2>
        </div>

        <Button text="Pay Now" />
      </div>
    </div>
  );
}
