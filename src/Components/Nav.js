import React from 'react';
import "./Nav.css";
import Logo from "./Logo.svg"
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <img src={Logo} alt="" />
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#"><PersonIcon fontSize='large'/></a></li>
        <li><a href="#"><ShoppingBasketRoundedIcon fontSize='large'/></a></li>

      </ul>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Nav;