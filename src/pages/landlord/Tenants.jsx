import users from "../../data/users";
import Table from "../../components/Table";

export default function Tenants() {
  const columns = ["Name", "Role", "Email", "Status"];

  const tenants = users.filter(
    (user) => user.role === "Tenant"
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        My Tenants
      </h1>
      <Table columns={columns} data={tenants} />
    </div>
  );
}
