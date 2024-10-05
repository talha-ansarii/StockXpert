import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [segment, setSegment] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [category, setCategory] = useState('');
  const [announcement, setAnnouncement] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/report');
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">View BSE Reports</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Segment Dropdown */}
        <select 
          value={segment} 
          onChange={(e) => setSegment(e.target.value)} 
          className="border p-2 rounded w-full"
        >
          <option value="" disabled>Select Segment</option>
          <option value="Equity">Equity</option>
          <option value="Debt">Debt</option>
          <option value="Derivative">Derivative</option>
          <option value="Commodity">Commodity</option>
        </select>

        {/* From Date */}
        <input 
          type="date" 
          value={fromDate} 
          onChange={(e) => setFromDate(e.target.value)} 
          className="border p-2 rounded w-full"
        />

        {/* To Date */}
        <input 
          type="date" 
          value={toDate} 
          onChange={(e) => setToDate(e.target.value)} 
          className="border p-2 rounded w-full"
        />

        {/* Category Dropdown */}
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          className="border p-2 rounded w-full"
        >
          <option value="" disabled>Select Category</option>
          <option value="Quarterly">Quarterly</option>
          <option value="Annual">Annual</option>
          <option value="Half-Yearly">Half-Yearly</option>
          <option value="Monthly">Monthly</option>
        </select>

        {/* Announcement Submission Type Dropdown */}
        <select 
          value={announcement} 
          onChange={(e) => setAnnouncement(e.target.value)} 
          className="border p-2 rounded w-full"
        >
          <option value="" disabled>Select Announcement Submission Type</option>
          <option value="Financial">Financial</option>
          <option value="Corporate">Corporate</option>
          <option value="Shareholding">Shareholding</option>
          <option value="Other">Other</option>
        </select>

        <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">View</button>
      </form>
    </div>
  );
};

export default LoginPage;
