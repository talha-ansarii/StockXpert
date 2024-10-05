import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "tailwindcss/tailwind.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Homepage = () => {
  // State for stock data and chart data
  const [stockData, setStockData] = useState([
    { name: "TATA Steel", price: 500, change: "+1.5%", volume: "1.2M" },
    { name: "Reliance", price: 2000, change: "-0.75%", volume: "3.5M" },
    { name: "Infosys", price: 1500, change: "+0.9%", volume: "1.8M" },
    { name: "Wipro", price: 700, change: "+2.0%", volume: "2.2M" },
    { name: "ICICI Bank", price: 950, change: "-1.25%", volume: "2.5M" },
  ]);

  const [chartData, setChartData] = useState({
    labels: [
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
    ],
    datasets: [
      {
        label: "Sensex Index",
        data: [49000, 49200, 49300, 49500, 49400, 49600],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.1,
      },
      {
        label: "Nifty Index",
        data: [14500, 14600, 14650, 14700, 14680, 14800],
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.1,
      },
    ],
  });

  useEffect(() => {
    // Function to simulate real-time stock price updates
    const updateMarketData = () => {
      // Update stock prices
      setStockData((prevStockData) =>
        prevStockData.map((stock) => {
          // Randomly generate price changes
          const priceChange = Math.floor(Math.random() * 10) - 5; // Change can be -5 to +4
          const newPrice = Math.max(0, stock.price + priceChange); // Ensure price doesn't go negative
          const newChange = `${priceChange > 0 ? "+" : ""}${priceChange}%`;

          return {
            ...stock,
            price: newPrice, // Keep as number
            change: newChange,
          };
        })
      );

      // Update chart data with random index values
      setChartData((prevChartData) => {
        const newSensexData = [...prevChartData.datasets[0].data];
        const newNiftyData = [...prevChartData.datasets[1].data];

        // Shift data to the left and add new random values
        newSensexData.shift();
        newNiftyData.shift();

        // Generate new data points based on the last known values
        const lastSensexValue = newSensexData[newSensexData.length - 1];
        const lastNiftyValue = newNiftyData[newNiftyData.length - 1];

        const newSensexValue = Math.max(
          0,
          lastSensexValue +
            (Math.random() > 0.5
              ? Math.floor(Math.random() * 200)
              : -Math.floor(Math.random() * 200))
        );
        const newNiftyValue = Math.max(
          0,
          lastNiftyValue +
            (Math.random() > 0.5
              ? Math.floor(Math.random() * 100)
              : -Math.floor(Math.random() * 100))
        );

        newSensexData.push(newSensexValue);
        newNiftyData.push(newNiftyValue);

        return {
          ...prevChartData,
          datasets: [
            {
              ...prevChartData.datasets[0],
              data: newSensexData,
            },
            {
              ...prevChartData.datasets[1],
              data: newNiftyData,
            },
          ],
        };
      });
    };

    // Set an interval to update the market data every 5 seconds
    const intervalId = setInterval(updateMarketData, 5000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Market Performance",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Index Value",
        },
      },
    },
  };

  return (
    <div className="bg-gray-100 flex justify-between flex-col h-screen ">
      {/* Navigation Bar */}
      <div>
        <nav className="bg-blue-900 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">StockXpert</h1>
            <div>
              <a href="/" className="px-4 hover:text-blue-300">
                Home
              </a>
              <a href="/login" className="px-4 hover:text-blue-300">
                View Reports
              </a>
              <a href="/subscription" className="px-4 hover:text-blue-300">
                Subscribe
              </a>
            </div>
          </div>
        </nav>
        <div className="bg-gray-900 text-white p-2">
          <div className="container flex justify-around mx-auto overflow-x-auto whitespace-nowrap">
            {stockData.map((stock) => (
              <span key={stock.name} className="inline-block mr-8">
                {stock.name}: ₹{parseFloat(stock.price).toFixed(2)} (
                {stock.change})
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto p-8">
        {/* Stock Performance Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Market Performance</h2>
            <Line data={chartData} options={options} />
          </div>
          {/* Stock Data Table */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Stock Prices</h2>
            <table className="min-w-full table-auto border-collapse border border-gray-300 text-left">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Company</th>
                  <th className="border border-gray-300 px-4 py-2">Price</th>
                  <th className="border border-gray-300 px-4 py-2">Change</th>
                  <th className="border border-gray-300 px-4 py-2">Volume</th>
                </tr>
              </thead>
              <tbody>
                {stockData.map((stock, idx) => (
                  <tr key={idx} className="hover:bg-gray-200">
                    <td className="border border-gray-300 px-4 py-2">
                      {stock.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      ₹{parseFloat(stock.price).toFixed(2)}
                    </td>
                    <td
                      className={`border border-gray-300 px-4 py-2 ${
                        stock.change.includes("+")
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {stock.change}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {stock.volume}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 ">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 StockXpert. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
