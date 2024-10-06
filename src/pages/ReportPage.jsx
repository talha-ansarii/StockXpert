import React, { useState } from 'react';
import Report from '../components/Report';
import Insights from '../components/Insights';
import Chart from '../components/Chart';

const companies = [
  { name: "Reliance", instagram: "https://www.instagram.com/reliance_digital/embed" },
  { name: "Tata Motors", instagram: "https://www.instagram.com/tatasteelltd/embed" },
  { name: "Infosys", instagram: "https://www.instagram.com/infosys/embed" },
];

const ReportPage = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

 

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-blue-900 to-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Stock Tracker</h1>
          <div>
            <a href="/" className="px-4 hover:text-blue-300">Home</a>
            <a href="/subscription" className="px-4 hover:text-blue-300">Subscribe</a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Select a Company to View Report</h1>
        
        <div className="mb-4">
          <select
            className="border border-gray-300 p-2 rounded w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCompany ? selectedCompany.name : ''}
            onChange={(e) => {
              const company = companies.find(c => c.name === e.target.value);
              setSelectedCompany(company);
            }}
          >
            <option value="" disabled>Select Company</option>
            {companies.map((company, idx) => (
              <option key={idx} value={company.name}>{company.name}</option>
            ))}
          </select>
        </div>

        {selectedCompany && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Report Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 transition transform hover:shadow-xl ">
              <h2 className="text-xl font-semibold mb-4 text-blue-900">{selectedCompany.name} Report</h2>
              <Report company={selectedCompany.name} />
            </div>

            {/* Instagram Embed Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 transition transform hover:shadow-xl ">
              <h2 className="text-xl font-semibold mb-4 text-blue-900">Data source</h2>
              <iframe
                src={selectedCompany.instagram}
                width="600"
                height="300"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allow="encrypted-media"
              />
            </div>
            {/* Insights Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 transition transform hover:shadow-xl ">
              <h2 className="text-xl font-semibold mb-4 text-blue-900">Insights</h2>
              <Insights  company={selectedCompany.name} />
            </div>

            {/* Chart Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 transition transform hover:shadow-xl ">
              <h2 className="text-xl font-semibold mb-4 text-blue-900">{selectedCompany.name} Chart</h2>
              <Chart />
            </div>

          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Stock Tracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ReportPage;
