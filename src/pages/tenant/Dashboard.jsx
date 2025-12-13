import StatCard from "../../components/StatCard";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Tenant Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Wallet Balance" value="₹12,500" />
        <StatCard title="Tenant Score" value="780" />
        <StatCard title="Active Bookings" value="2" />
      </div>
    </div>
  );
}
