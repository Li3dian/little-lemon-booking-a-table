import React from 'react';
import ProductCard from './ProductCard';
import bruschetta from '../styles/bruschetta.png';
import greekSalad from '../styles/greekSalad.jpg';
import lemonDessert from '../styles/lemonDessert.jpg';

const products = [
  {
    id: 1,
    title: "Greek Salad",
    price: "€12,99",
    description: "De beroemde Griekse salade van knapperige sla, tomaten en olijven.",
    img: greekSalad,
  },
  {
    id: 2,
    title: "Bruschetta",
    price: "€5,99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    img: bruschetta,
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: "€4,99",
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    img: lemonDessert,
  },
];

export default function Specials() {
  return (
    <section className="specials-container">
      <div className="specials-header">
        <h1>Specials van de week</h1>
        <button className="cta-btn">Online Menu</button>
      </div>

      <div className="specials-grid">
        {products.map((item) => (
          <ProductCard key={item.id} info={item} />
        ))}
      </div>
    </section>
  );
}