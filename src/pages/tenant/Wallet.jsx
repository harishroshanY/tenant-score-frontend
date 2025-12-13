import transactions from "../../data/transactions";
import Table from "../../components/Table";

export default function Wallet() {
  const columns = ["Date", "Type", "Amount", "Status"];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Wallet
      </h1>

      <div className="bg-white p-4 rounded shadow mb-6">
        <p className="text-gray-500">Available Balance</p>
        <h2 className="text-3xl font-bold">₹12,500</h2>
      </div>

      <Table columns={columns} data={transactions} />
    </div>
  );
}
