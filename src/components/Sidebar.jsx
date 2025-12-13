import { NavLink } from "react-router-dom";
import { getRole } from "../utils/auth";

function getMenuForRole(role) {
  if (role === "landlord") {
    return [
      { name: "Dashboard", path: "/landlord" },
      { name: "Properties", path: "/landlord/properties" },
      { name: "Bookings", path: "/landlord/bookings" },
      { name: "Earnings", path: "/landlord/earnings" },
      { name: "Tenants", path: "/landlord/tenants" },
    ];
  }

  if (role === "admin") {
    return [
      { name: "Dashboard", path: "/admin" },
      { name: "Properties", path: "/admin/properties" },
      { name: "Transactions", path: "/admin/transactions" },
      { name: "Users", path: "/admin/users" },
      { name: "Score Control", path: "/admin/score-control" },
    ];
  }

  // default tenant menu
  return [
    { name: "Dashboard", path: "/tenant" },
    { name: "Wallet", path: "/tenant/wallet" },
    { name: "Bookings", path: "/tenant/bookings" },
    { name: "Score", path: "/tenant/score" },
    { name: "Profile", path: "/tenant/profile" },
  ];
}

export default function Sidebar() {
  const role = getRole() || "tenant";
  const menu = getMenuForRole(role);

  return (
    <aside className="w-64 bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">
        {role.charAt(0).toUpperCase() + role.slice(1)}
        <span className="text-blue-500">Score</span>
      </h1>

      <nav className="flex flex-col gap-2">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-blue-600"
                  : "text-gray-300 hover:bg-gray-800"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
