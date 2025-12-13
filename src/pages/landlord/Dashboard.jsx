import StatCard from "../../components/StatCard";

export default function LandlordDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Landlord Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Properties" value="5" />
        <StatCard title="Occupied Units" value="4" />
        <StatCard title="Monthly Earnings" value="₹55,000" />
        <StatCard title="Pending Rent" value="₹8,000" />
      </div>
    </div>
  );
}
