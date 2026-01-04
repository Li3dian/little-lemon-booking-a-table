import React from 'react';
import { Link } from "react-router-dom";
import logoImage from '../styles/logo.png';

export default function Nav() {
  return (
    <nav className="nav-list">
      <Link to="/" className="logo-link">
        <img
          src={logoImage}
          alt="Little Lemon Logo"
          className="nav-logo"
        />
      </Link>

      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger-label">
        <span className="hamburger-icon"></span>
      </label>

      <ul className="nav-list-pages">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Menu</Link></li>
        <li><Link to="/reservations">Reserve</Link></li>
      </ul>
    </nav>
  );
}