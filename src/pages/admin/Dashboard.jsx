import StatCard from "../../components/StatCard";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Users" value="120" />
        <StatCard title="Total Properties" value="45" />
        <StatCard title="Monthly Revenue" value="₹2,45,000" />
        <StatCard title="Average Score" value="740" />
      </div>
    </div>
  );
}
