import React from "react";
import "../styles/Footer.css"; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Resources</h4>
        <ul>
          <li>Gift Cards</li>
          <li>Find a Store</li>
          <li>Membership</li>
          <li>Nike Journal</li>
          <li>Site Feedback</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Help</h4>
        <ul>
          <li>Get Help</li>
          <li>Order Status</li>
          <li>Shipping and Delivery</li>
          <li>Returns</li>
          <li>Order Cancellation</li>
          <li>Payment Options</li>
          <li>Gift Card Balance</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li>About Nike</li>
          <li>News</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>Purpose</li>
          <li>Sustainability</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Promotions & Discounts</h4>
        <ul>
          <li>Student</li>
          <li>Military</li>
          <li>Teacher</li>
          <li>First Responders & Medical Professionals</li>
          <li>Birthday</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Nike, Inc. All Rights Reserved</p>
        <div className="footer-links">
          <a href="#">Terms of Sale</a>
          <a href="#">Terms of Use</a>
          <a href="#">Nike Privacy Policy</a>
          <a href="#">Your Privacy Choices</a>
          <a href="#">CA Supply Chains Act</a>
        </div>
        <div className="footer-location">🌐 United States</div>
      </div>
    </footer>
  );
};

export default Footer;