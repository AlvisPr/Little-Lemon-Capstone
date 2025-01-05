import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-content">
          <div className="footer-section useful-links">
            <h3>Useful Links</h3>
            <nav>
              <a href="#home">Home</a>
              <a href="#menu">Menu</a>
              <a href="#reviews">Reviews</a>
              <a href="#about">About</a>
              <a href="#reservations">Book a Table</a>
              <a href="#order">Order Online</a>
            </nav>
          </div>

          <div className="footer-section contact">
            <h3>Contact</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Address:</span>
                <p>123 Mediterranean Ave, Chicago, IL 60601</p>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <p>(312) 555-0123</p>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <p>info@littlelemon.com</p>
              </div>
            </div>
          </div>

          <div className="footer-section hours">
            <h3>Opening Hours</h3>
            <div className="hours-info">
              <div className="hours-group weekdays">
                <h4>Weekdays</h4>
                <p>Monday - Thursday</p>
                <p className="time">11:00 AM - 9:00 PM</p>
              </div>
              <div className="hours-group weekend">
                <h4>Weekend</h4>
                <p>Friday - Saturday</p>
                <p className="time">11:00 AM - 10:00 PM</p>
                <p>Sunday</p>
                <p className="time">12:00 PM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Little Lemon Restaurant. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="/terms">Terms of Service</a>
            <span className="separator">|</span>
            <a href="/accessibility">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;