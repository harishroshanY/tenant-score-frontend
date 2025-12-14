import Button from "../../components/Button";

export default function Profile() {
  return (
    <div className="max-w-md">
      <h1 className="text-2xl font-bold mb-4">
        Profile
      </h1>

      <div className="bg-white p-6 rounded shadow space-y-4">
        <input
          type="text"
          value="Harish"
          className="w-full border p-2 rounded"
          readOnly
        />
        <input
          type="email"
          value="harish@example.com"
          className="w-full border p-2 rounded"
          readOnly
        />

        <Button text="Edit Profile" variant="secondary" />
      </div>
    </div>
  );
}
