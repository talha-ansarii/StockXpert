import React from 'react';

const Report = ({ company }) => {
  const report = {
    receiverName: "John Doe",
    orderType: "Buy",
    timeOfArrival: "12:45 PM",
    orderValue: "₹10,000",
    orderReceivedFrom: "XYZ Broker",
    revenueLastQuarter: "₹1 Cr",
    profitLastQuarter: "₹20 L",
    marketCap: "₹5 Cr",
    stockPE: 25.5,
    yearlyRevenue: "₹12 Cr"
  };

  return (
    <div className="border p-4 rounded shadow mt-4">
      <h2 className="text-xl font-bold">Report for {company}</h2>
      <p>Receiver Name: {report.receiverName}</p>
      <p>Order Type: {report.orderType}</p>
      <p>Time of Arrival: {report.timeOfArrival}</p>
      <p>Order Value: {report.orderValue}</p>
      <p>Order Received From: {report.orderReceivedFrom}</p>
      <p>Revenue Last Quarter: {report.revenueLastQuarter}</p>
      <p>Profit Last Quarter: {report.profitLastQuarter}</p>
      <p>Market Cap: {report.marketCap}</p>
      <p>Stock P/E: {report.stockPE}</p>
      <p>Yearly Revenue: {report.yearlyRevenue}</p>
    </div>
  );
};

export default Report;
