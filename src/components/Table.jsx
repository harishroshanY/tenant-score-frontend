export default function Table({ columns, data }) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                className="px-4 py-3 text-sm font-semibold"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="border-t hover:bg-gray-50"
            >
              {Object.values(row).map((cell, i) => (
                <td
                  key={i}
                  className="px-4 py-3 text-sm"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
