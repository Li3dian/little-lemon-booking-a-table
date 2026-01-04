import React from 'react';
import { Link } from 'react-router-dom';
import CounterButton from './CounterButton.jsx';

export default function ProductCard({ info }) {
  return (
    <article className="product-card">
      <div className="card-image">
        <img src={info.img} alt={info.title} />
      </div>

      <div className="card-content">
        <div className="card-header">
          <h3>{info.title}</h3>
          <span className="price">{info.price}</span>
        </div>

        <p className="description">{info.description}</p>

        <div className="delivery-container">
          <a href="/order">Order a delivery</a>
        </div>
      </div>
    </article>
  );
}