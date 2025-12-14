import Table from "../../components/Table";
import { getAllUsers } from "../../utils/auth";

export default function Tenants() {
  const columns = ["Name", "Role", "Email", "Status"];

  const tenants = getAllUsers().filter((user) => user.role === "tenant");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Tenants</h1>
      <Table columns={columns} data={tenants} />
    </div>
  );
}
