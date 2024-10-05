import React from "react";

const SubscriptionSuccessPage = () => {
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

      {/* Subscription Success Message */}
      <div className="container mx-auto p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Subscription Successful!</h2>
        <p className="text-xl mb-4">
          You will now receive stock updates on WhatsApp.
        </p>
        <a
          href="/"
          className="bg-blue-900 text-white p-3 rounded shadow hover:bg-blue-700"
        >
          Go to Home
        </a>
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

export default SubscriptionSuccessPage;
