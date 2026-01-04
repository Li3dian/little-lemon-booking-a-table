import React from 'react';
import footerLogo from '../styles/logo_footer.png';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-column footer-logo">
        <img src={footerLogo} alt="Little Lemon Logo" />
      </div>

      <div className="footer-column">
        <h4>Navigation</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Bruschetta</a></li>
          <li><a href="/menu">Cheesecake</a></li>
          <li><a href="/menu">Salat</a></li>
          <li><a href="/reservations">Reservering</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Contact</h4>
        <p>Little Lemon straat 1</p>
        <p>1234 AB Amsterdam</p>
        <p>Tel: +31 20 123 4567</p>
        <p>Email: hello@littlelemon.com</p>
      </div>

      <div className="footer-column">
        <h4>Social Media</h4>
        <ul>
          <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
          <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
        </ul>
      </div>
    </footer>
  );
}