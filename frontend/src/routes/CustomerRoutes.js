import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CustomerDashboardPage from '../pages/customer/customerDashboardPage/CustomerDashboardPage';
import CustomerRegisterPage from '../pages/customer/customerRegisterPage/CustomerRegisterPage';
import MyProfilePage from '../pages/customer/myProfilePage/MyProfilePage';
import AppointmentPage from '../pages/customer/appointmentsPage/AppointmentPage';
import BookAppointmentPage from '../pages/customer/bookAppointmentPage/BookAppointmentPage';


const CustomerRoutes = () => (
  <Router>
    <Routes>
      <Route path="/customer/register"  element={<CustomerRegisterPage />} />
      <Route path="/customer/dashboard" element={<CustomerDashboardPage />} />
      <Route path='/customer/profile' element={<MyProfilePage />} />
      <Route path='/customer/appointments' element={<AppointmentPage />} />
      <Route path='/customer/book/appointment/:barberId' element={<BookAppointmentPage />} />
    </Routes>
  </Router>
);

export default CustomerRoutes;
