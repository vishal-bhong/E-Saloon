import React from 'react';
import './Header.css';

import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Header = ({ role, toggleDrawer }) => {
  const menuItems = {
    customer: ['Profile', 'Appointments', 'Feedback', 'Contact Us'],
    barber: ['Dashboard', 'profile', 'hairStyles' ],
  };

  return (
    <header className="header">
      <div className="header-container">

        <button className="menu-btn" onClick={toggleDrawer} data-bs-toggle="offcanvas" data-bs-target="#offcanvas">
          <FaBars />
        </button>

        
        <Link to={`/${role}/dashboard`} className="logo">
          <span>E - Saloon</span>
        </Link>

        <nav className="d-none d-md-block">
          <ul className="nav-list">
            {menuItems[role]?.map((item, index) => (
                <li key={index}>
                  <Link to={`/${role}/${item}`} className="nav-item">
                      <span>{item}</span>
                  </Link>
                </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions d-none d-md-flex">
          <input type="text" placeholder="Search..." className="form-control search-bar" />
          <Link to={`/${role}/login`}>
            <button className="btn btn-outline-light">Logout</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
