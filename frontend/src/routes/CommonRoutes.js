import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UserLogin from '../components/common/userLogin/UserLogin';
import PaymentComponent from '../components/common/payment/PaymentComponent';


const CommonRoutes = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<UserLogin />} />
      <Route path="/payment" element={<PaymentComponent />} />
    </Routes>
  </Router>
);

export default CommonRoutes;
