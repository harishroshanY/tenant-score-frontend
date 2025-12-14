import Table from "../../components/Table";
import { getAllUsers } from "../../utils/auth";

export default function Users() {
  const columns = ["Name", "Role", "Email", "Status"];
  const users = getAllUsers();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <Table columns={columns} data={users} />
    </div>
  );
}
