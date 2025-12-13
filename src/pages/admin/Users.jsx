import users from "../../data/users";
import Table from "../../components/Table";

export default function Users() {
  const columns = ["Name", "Role", "Email", "Status"];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <Table columns={columns} data={users} />
    </div>
  );
}
