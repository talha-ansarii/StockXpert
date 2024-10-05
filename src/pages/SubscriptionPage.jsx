import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SubscriptionPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubscription = (e) => {
    e.preventDefault();
    // Normally, you would validate the phone number and save the subscription in your backend.

    // Redirect to the payment page after submitting the subscription form
    navigate("/payment");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      {/* Navigation Bar */}
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
          </div>
        </div>
      </nav>

      {/* Subscription Form */}
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Subscribe for Stock Updates
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
          <form onSubmit={handleSubscription}>
            <label className="block mb-4">
              <span className="text-gray-700">Enter your WhatsApp number:</span>
              <input
                type="text"
                className="mt-2 p-2 block w-full border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., +919876543210"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </label>
            <button
              type="submit"
              className="bg-blue-900 text-white p-2 rounded shadow hover:bg-blue-700 w-full"
            >
              Subscribe
            </button>
          </form>
          {subscriptionSuccess && (
            <p className="text-green-500 mt-4 text-center">
              Successfully subscribed! You will receive updates on WhatsApp.
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 StockXpert. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SubscriptionPage;
