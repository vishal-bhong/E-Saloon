import React from 'react';
import './Header.css';

import { FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { userLogout } from '../../../api/CommonApi';

const Header = ({ role, toggleDrawer }) => {
  
  const menuItems = {
    customer: ['Dashboard', 'Profile', 'Appointments'],
    barber: ['Dashboard', 'profile', 'hairStyles' ],
    admin: ['Dashboard', 'barberManager', 'profile', 'register']
  };

  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await userLogout();
    console.log(result)
    if(result.data == "Successfully logged out"){
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("userType");
      toast.success(result.data)
      navigate("/login");
    }
  }

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
            <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
