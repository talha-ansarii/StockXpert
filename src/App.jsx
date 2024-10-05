import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import ReportPage from './pages/ReportPage';
import SubscriptionPage from './pages/SubscriptionPage';
import SubscriptionSuccessPage from './pages/SubscriptionSuccessPage';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/subscription" element={<SubscriptionPage/>} />
        <Route path="/subscription-success" element={<SubscriptionSuccessPage/>} />
        <Route path="payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
