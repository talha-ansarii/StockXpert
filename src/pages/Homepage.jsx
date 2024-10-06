import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import StockMarketChart from "../components/StockMarketChart";

const Homepage = () => {
  const [stockData, setStockData] = useState([
    { name: "TATA Steel", price: 500, change: "+1.5%", volume: "1.2M" },
    { name: "Reliance", price: 2000, change: "-0.75%", volume: "3.5M" },
    { name: "Infosys", price: 1500, change: "+0.9%", volume: "1.8M" },
    { name: "Wipro", price: 700, change: "+2.0%", volume: "2.2M" },
    { name: "ICICI Bank", price: 950, change: "-1.25%", volume: "2.5M" },
  ]);

  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  // Function to toggle the chatbot popup
  const toggleChatbot = () => {
    setChatbotOpen(!chatbotOpen);
  };

  // Function to handle user input and generate chatbot responses
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      const newMessages = [
        ...messages,
        { sender: "user", text: userInput.trim() },
      ];
      setMessages(newMessages);
      generateResponse(userInput.trim());
      setUserInput("");
    }
  };

  // Function to generate a response based on user input
  const generateResponse = (input) => {
    let response = "I'm sorry, I didn't understand that.";
    if (input.toLowerCase().includes("hi") || input.toLowerCase().includes("hello")) {
      response = "Hello! How can I assist you today?";
    } else if (input.toLowerCase().includes("stock") || input.toLowerCase().includes("price")) {
      response = "You can ask me about the current stock prices of companies like TATA Steel, Reliance, Infosys, Wipro, and ICICI Bank!";
    } else if (input.toLowerCase().includes("tata steel")) {
      response = `TATA Steel is currently priced at ₹${stockData[0].price}.`;
    } else if (input.toLowerCase().includes("reliance")) {
      response = `Reliance is currently priced at ₹${stockData[1].price}.`;
    } else if (input.toLowerCase().includes("infosys")) {
      response = `Infosys is currently priced at ₹${stockData[2].price}.`;
    } else if (input.toLowerCase().includes("wipro")) {
      response = `Wipro is currently priced at ₹${stockData[3].price}.`;
    } else if (input.toLowerCase().includes("icici bank")) {
      response = `ICICI Bank is currently priced at ₹${stockData[4].price}.`;
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "bot", text: response },
    ]);
  };

  useEffect(() => {
    const updateMarketData = () => {
      setStockData((prevStockData) =>
        prevStockData.map((stock) => {
          const priceChange = Math.floor(Math.random() * 10) - 5;
          const newPrice = Math.max(0, stock.price + priceChange);
          const newChange = `${priceChange > 0 ? "+" : ""}${priceChange}%`;

          return { ...stock, price: newPrice, change: newChange };
        })
      );
    };

    const intervalId = setInterval(updateMarketData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-gray-100 flex justify-between flex-col h-screen">
      {/* Navigation Bar */}
      <div>
        <nav className="bg-blue-900 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">StockXpert</h1>
            <div>
              <a href="/" className="px-4 hover:text-blue-300">Home</a>
              <a href="/login" className="px-4 hover:text-blue-300">Track your Stocks</a>
              <a href="/subscription" className="px-4 hover:text-blue-300">Subscribe</a>
            </div>
          </div>
        </nav>
        <div className="bg-gray-900 text-white p-2">
          <div className="container flex justify-around mx-auto overflow-x-auto whitespace-nowrap">
            {stockData.map((stock) => (
              <span key={stock.name} className="inline-block mr-8">
                {stock.name}: ₹{parseFloat(stock.price).toFixed(2)} ({stock.change})
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Market Performance</h2>
            <StockMarketChart />
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
                    <td className="border border-gray-300 px-4 py-2">{stock.name}</td>
                    <td className="border border-gray-300 px-4 py-2">₹{parseFloat(stock.price).toFixed(2)}</td>
                    <td className={`border border-gray-300 px-4 py-2 ${stock.change.includes("+") ? "text-green-500" : "text-red-500"}`}>
                      {stock.change}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">{stock.volume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Chatbot Icon */}
      <button
        className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-500 transition duration-300"
        onClick={toggleChatbot}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 10h.01M12 10h.01M16 10h.01M21 16.784V6a2 2 0 00-2-2H5a2 2 0 00-2 2v10.784A2 2 0 005 18h4l3 3 3-3h4a2 2 0 002-2z"
          />
        </svg>
      </button>

      {/* Chatbot Popup */}
      {chatbotOpen && (
        <div className="fixed bottom-16 right-4 bg-gray-200 shadow-lg rounded-lg w-80 p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Chatbot</h3>
            <button onClick={toggleChatbot}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-4 h-48 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 mb-2 rounded ${
                  msg.sender === "user" ? "bg-blue-100 text-right" : "bg-gray-100"
                }`}
              >
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Homepage;
