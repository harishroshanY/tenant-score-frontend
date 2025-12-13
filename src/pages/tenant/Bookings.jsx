import bookings from "../../data/bookings";
import Table from "../../components/Table";

export default function Bookings() {
  const columns = [
    "Property",
    "City",
    "Date",
    "Status",
    "Amount",
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        My Bookings
      </h1>
      <Table columns={columns} data={bookings} />
    </div>
  );
}
