import React, { useState } from 'react';
import Header from '../../../components/common/header/Header';
// import SideDrawer from '../../../components/common/sideDrawer1/SideDrawer';
import CustomerDashboard from '../../../components/customer/customerDashboard/CustomerDashboard';
import './CustomerDashboardPage.css';
import SideDrawer from '../../../components/common/sidedrawer/SideDrawer';


const CustomerDashboardPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const customerMenuItems = [
    'My Profile',
    'My Appointments',
    'Notifications',
    'Feedback',
    'Contact Us',
  ];

  return (
    <div className="customer-dashboard-page">
      <Header role="customer" />
      {/* <SideDrawer isOpen={drawerOpen} toggleDrawer={toggleDrawer} menuItems={customerMenuItems} /> */}
      <SideDrawer />
      {/* <main className={`main- ${drawerOpen ? 'drawer-open' : ''}`}> */}
      <CustomerDashboard />
      {/* </main> */}
    </div>
  );
};

export default CustomerDashboardPage;
