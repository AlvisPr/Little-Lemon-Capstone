import React from 'react'
import "./Footer.css"
import Logo from "./Logo.svg"

function Footer() {
  return (
   <footer className="fifth__container__wrapper">
    <div className="fifth__content__wrapper">
     <img src={Logo} alt="" />

  
     <nav className="navigation">
      <ul>
        <li>Navigation</li>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Login</a></li>
      </ul>
     </nav>

     <address className="contact">
      <ul>
        <li>Contact</li>
        <li><a href="#">123 Main Street, Anytown, USA</a></li>
        <li><a href="#"> +1 (555) 123-4567</a></li>
        <li><a href="#">info@example.com</a></li>
        <li><a href="#">Reservations:+1 (555) 987-6543 </a></li>
      </ul>
     </address>

     <nav className="social">
      <ul>
        <li>Social Media</li>
        <li><a href="https://www.facebook.com">Facebook</a></li>
        <li><a href="https://www.instagram.com">Instagram</a></li>
        <li><a href="https://www.twitter.com">X</a></li>
        <li><a href="https://www.linkedin.com">Linked In</a></li>
        <li><a href="https://www.tripadvisor.com">Trip Advisor</a></li>
      </ul>
     </nav>
     </div>
   </footer>
  )
}

export default Footer