export default function StatCard({ title, value, subtitle }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
      {subtitle && (
        <p className="text-sm text-gray-400 mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}
