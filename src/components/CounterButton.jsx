import React, { useState } from 'react';

export default function CounterButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-container">
      <p>Huidige teller: **{count}**</p>

      <button
        className="teller-knop"
        onClick={handleClick}
      >
        Verhoog teller
      </button>
    </div>
  );
}