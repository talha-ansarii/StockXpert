import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    // Mock payment process
    setPaymentSuccess(true);

    // Redirect to subscription success page after mock payment
    setTimeout(() => {
      navigate("/subscription-success");
    }, 2000);
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
            <a href="/subscription" className="px-4 hover:text-blue-300">
              Subscribe
            </a>
            <a href="/login" className="px-4 hover:text-blue-300">
              Login
            </a>
          </div>
        </div>
      </nav>

      {/* Payment Form */}
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Payment for Subscription
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
          <form onSubmit={handlePayment}>
            <label className="block mb-4">
              <span className="text-gray-700">Card Number:</span>
              <input
                type="text"
                className="mt-2 p-2 block w-full border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 1234 5678 9123 4567"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Expiry Date:</span>
              <input
                type="text"
                className="mt-2 p-2 block w-full border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-blue-500"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">CVV:</span>
              <input
                type="text"
                className="mt-2 p-2 block w-full border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-blue-500"
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </label>
            <button
              type="submit"
              className="bg-blue-900 text-white p-2 rounded shadow hover:bg-blue-700 w-full"
            >
              Pay Now
            </button>
          </form>
          {paymentSuccess && (
            <p className="text-green-500 mt-4 text-center">
              Payment Successful! Redirecting...
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

export default PaymentPage;
