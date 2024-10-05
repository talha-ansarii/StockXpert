import React from 'react';

const data = {
  labels: ["Q1", "Q2", "Q3", "Q4"],
  datasets: [
    {
      label: 'Sales',
      data: [120, 190, 300, 500],
    },
    {
      label: 'Expenses',
      data: [100, 150, 200, 400],
    },
    {
      label: 'Operating Profit',
      data: [20, 40, 100, 100],
    },
    {
      label: 'OPM%',
      data: [16.67, 21.05, 33.33, 20],
    },
    {
      label: 'Other Income',
      data: [10, 15, 20, 25],
    },
    {
      label: 'Interest',
      data: [5, 10, 15, 20],
    },
    {
      label: 'Depreciation',
      data: [10, 12, 15, 18],
    }
  ],
};

const Chart = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300 text-left">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Quarter</th>
            {data.datasets.map((dataset, idx) => (
              <th key={idx} className="border border-gray-300 px-4 py-2">{dataset.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.labels.map((label, rowIdx) => (
            <tr key={rowIdx}>
              <td className="border border-gray-300 px-2 py-1">{label}</td>
              {data.datasets.map((dataset, colIdx) => (
                <td key={colIdx} className="border border-gray-300 px-4 py-2">{dataset.data[rowIdx]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Chart;
