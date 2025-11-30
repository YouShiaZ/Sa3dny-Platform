export const Table = ({ columns = [], data = [] }) => (
  <div className="overflow-x-auto rounded-2xl border border-slate-100 bg-white shadow-card">
    <table className="min-w-full text-left text-sm">
      <thead className="bg-slate-50 text-slate-600">
        <tr>
          {columns.map((col) => (
            <th key={col.key} className="px-4 py-3 font-semibold">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {data.map((row, idx) => (
          <tr key={idx} className="hover:bg-slate-50/50">
            {columns.map((col) => (
              <td key={col.key} className="px-4 py-3 text-slate-800">
                {col.render ? col.render(row) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
