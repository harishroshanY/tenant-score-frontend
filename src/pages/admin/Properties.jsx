import properties from "../../data/properties";
import Table from "../../components/Table";

export default function Properties() {
  const columns = ["Property", "Location", "Rent", "Status"];

  const formattedData = properties.map((p) => ({
    Property: p.name,
    Location: p.location,
    Rent: p.rent,
    Status: p.status,
  }));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Properties</h1>
      <Table columns={columns} data={formattedData} />
    </div>
  );
}
