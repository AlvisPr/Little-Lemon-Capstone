import React, { useEffect, useState } from 'react';
import "./Nav.css";
import Logo from "./Logo.svg"
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
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
