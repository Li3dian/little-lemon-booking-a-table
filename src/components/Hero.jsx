import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../styles/heroImage.jpg';

export default function Hero() {
  return (
    <section className="hero">


    <div className="hero-content">
      <div className="hero-titel-heading">
        <h1>Little Lemon</h1>
        <h2>Amsterdam</h2>
      </div>
      <p>Mediterrane keuken met een moderne twist, geserveerd in een gezellige, huiselijke sfeer in het hart van Amsterdam.</p>
      <a href="/reservations" className="cta-btn">Reserveer nu</a>
      </div>

      <div className="hero-image-container">
      <Link to="/" className="hero-image">
        <img
          src={heroImage}
          alt="Chef holds a dish"
          className="hero-image"
        />
      </Link>
      </div>
    </section>
  );
}