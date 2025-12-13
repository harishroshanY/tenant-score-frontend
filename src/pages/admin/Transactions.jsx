import transactions from "../../data/transactions";
import Table from "../../components/Table";

export default function Transactions() {
  const columns = ["Date", "Type", "Amount", "Status"];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <Table columns={columns} data={transactions} />
    </div>
  );
}
