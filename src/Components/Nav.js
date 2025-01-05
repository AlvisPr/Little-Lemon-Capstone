import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import "./Nav.css";
import Logo from "./Logo.svg"
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import { useNavigate } from 'react-router-dom';


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

  const handleLinkClick = (section) => {
    window.history.pushState(null, '', `/${section}`);
  };

  const navigate = useNavigate();
  const goToStart = (e) => {
    e.preventDefault();
    navigate('/');
};

  return (
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <img onClick={goToStart} src={Logo} alt="" />
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li><Link onClick={() => handleLinkClick('home')} to="home" smooth={true} duration={1000}>Home</Link></li>
          <li><Link onClick={() => handleLinkClick('reserve_table')} to="reserve" smooth={true} duration={1000}>Reserve</Link></li>
          <li><Link onClick={() => handleLinkClick('about')}to="about" smooth={true} duration={1000}>About</Link></li>
          <li><Link onClick={() => handleLinkClick('menu')}to="menu" smooth={true} duration={1000}>Menu</Link></li>
          <li><Link onClick={() => handleLinkClick('reviews')}to="reviews" smooth={true} duration={1000}>Reviews</Link></li>
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
