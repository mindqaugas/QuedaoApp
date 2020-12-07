import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png"
const Header = () => {
  return <div className="header_general">
    <div className="logo">
    <Link to="/" className="logo">QuedaoApp.com</Link>
    </div>
    <div className="header-menu">
    <Link to="/" className="header-menu-item">Home</Link>
    <Link to="/barcelona" className="header-menu-item">Tours</Link>
    <Link to="/barcelona" className="header-menu-item">Cities</Link>
    <Link to="/barcelona" className="header-menu-item">Blog</Link>
    <Link to="/barcelona" className="header-menu-item">Users</Link>
    </div>
    
  
  </div>;
};

export default Header;
