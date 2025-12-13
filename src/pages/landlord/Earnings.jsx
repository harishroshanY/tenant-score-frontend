import transactions from "../../data/transactions";
import Table from "../../components/Table";

export default function Earnings() {
  const columns = ["Date", "Type", "Amount", "Status"];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Earnings
      </h1>
      <Table columns={columns} data={transactions} />
    </div>
  );
}
