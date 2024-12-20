import React from 'react';
import './Header.css';
import { FaBars } from 'react-icons/fa';

const Header = ({ role, toggleDrawer }) => {
  const menuItems = {
    customer: ['My Profile', 'My Appointments', 'Notifications', 'Feedback', 'Contact Us'],
    vendor: ['Dashboard', 'Services', 'Appointments', 'Earnings'],
    admin: ['Dashboard', 'User Management', 'Reports', 'Settings'],
  };

  return (
    <header className="header">
      <div className="header-container">

        <button className="menu-btn" onClick={toggleDrawer} data-bs-toggle="offcanvas" data-bs-target="#offcanvas">
          <FaBars />
        </button>

        <div className="logo">E - Saloon</div>
        <nav className="d-none d-md-block">
          <ul className="nav-list">
            {menuItems[role]?.map((item, index) => (
              <li key={index} className="nav-item">{item}</li>
            ))}
          </ul>
        </nav>
        <div className="header-actions d-none d-md-flex">
          <input type="text" placeholder="Search..." className="form-control search-bar" />
          <button className="btn btn-outline-light">Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
