import React from 'react';
import "./Nav.css";
import Logo from "./Logo.svg"

function Nav() {
  return (
    <div className="wrapper">
    <nav>
        <img src={Logo} alt="" />
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Log In</a></li>
        </ul>
    </nav>
    </div>
  )
}

export default Nav