import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CustomerDashboardPage from '../pages/customer/customerDashboardPage/CustomerDashboardPage';
import CustomerRegisterPage from '../pages/customer/customerRegisterPage/CustomerRegisterPage';
import CustomerLoginPage from '../pages/customer/customerLoginPage/CustomerLoginPage';
import MyProfilePage from '../pages/customer/myProfilePage/MyProfilePage';
import AppointmentPage from '../pages/customer/appointmentsPage/AppointmentPage';


const CustomerRoutes = () => (
  <Router>
    <Routes>
      <Route path="/customer/register"  element={<CustomerRegisterPage />} />
      <Route path="/customer/login" element={<CustomerLoginPage />} />
      <Route path="/customer/dashboard" element={<CustomerDashboardPage />} />
      <Route path='/customer/profile/:id' element={<MyProfilePage />} />
      <Route path='/customer/appointments' element={<AppointmentPage />} />
    </Routes>
  </Router>
);

export default CustomerRoutes;
