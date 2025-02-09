import React, { useState } from 'react';
import Header from '../../../components/common/header/Header';
// import SideDrawer from '../../../components/common/sideDrawer1/SideDrawer';
import CustomerDashboard from '../../../components/customer/customerDashboard/CustomerDashboard';
import './CustomerDashboardPage.css';
import SideDrawer from '../../../components/common/sidedrawer/SideDrawer';


const CustomerDashboardPage = () => {

  // const userType = JSON.parse(localStorage.getItem('userType'));

  // if(!userType && userType != 'CUSTOMER') {
  //     return (
  //         <>
  //          <h1 style={{ padding: '100px 0 0 150px', fontWeight: 'bold', color: 'red' }}>Please Log in as Customer to see the dashboard.. </h1>
  //         </>
  //     )
  // }


  return (
    <div className="customer-dashboard-page">
      <Header role="customer" />
      <SideDrawer role="customer" />
      <CustomerDashboard />
    </div>
  );
};

export default CustomerDashboardPage;
