import properties from "../../data/properties";
import Table from "../../components/Table";

export default function Properties() {
  const columns = ["Property", "Location", "Rent", "Status"];

  const data = properties.map((p) => ({
    Property: p.name,
    Location: p.location,
    Rent: p.rent,
    Status: p.status,
  }));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        My Properties
      </h1>
      <Table columns={columns} data={data} />
    </div>
  );
}
