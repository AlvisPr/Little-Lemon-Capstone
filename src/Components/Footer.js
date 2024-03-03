import React from 'react'
import "./Footer.css"
import Logo from "./Logo.svg"

function Footer() {
  return (
   <div className="fifth__container__wrapper">
    <div className="fifth__content__wrapper">
     <img src={Logo} alt="" />
     <div className="navigation">
      <ul>
        <li>Navigation</li>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order Online</a></li>
        <li><a href="#">Login</a></li>
      </ul>
     </div>

     <div className="contact">
      <ul>
        <li>Contact</li>
        <li><a href="#">Adress</a></li>
        <li><a href="#">Phone Number</a></li>
        <li><a href="#">Email</a></li>
        <li><a href="#">Reservations</a></li>
      </ul>
     </div>

     <div className="social">
      <ul>
        <li>Social Media</li>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">X</a></li>
      </ul>
     </div>


    </div>
   </div>
  )
}

export default Footer