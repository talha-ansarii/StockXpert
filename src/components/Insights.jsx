import React from 'react';

const Insights = ({ company }) => {
  return (
    <div className="border p-4 rounded shadow mt-4">
      <h2 className="text-xl font-bold">Insights for {company}</h2>
      <p>The company’s stock P/E ratio is stable, indicating strong market confidence...</p>
    </div>
  );
};

export default Insights;
    