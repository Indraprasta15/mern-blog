import React from 'react';
import './Header.scss';
// import { useNavigate } from 'react-router-dom';

const Header = () => {
  // const navigate = useNavigate();
  return (
    <div className="header">
        <p className="logo-app">MERN BLOG</p>
        <p className="menu-item" 
          // onClick={() => navigate("/login")}
        >Logout</p>
    </div>
  )
}

export default Header;