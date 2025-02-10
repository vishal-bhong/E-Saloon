import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UserLogin from '../components/common/userLogin/UserLogin';


const CommonRoutes = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<UserLogin />} />
    </Routes>
  </Router>
);

export default CommonRoutes;
