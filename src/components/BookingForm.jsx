import React from 'react';
import { useState } from "react";
import { fetchAPI, submitAPI } from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function BookingForm() {
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    date: today,
    time: "",
    guests: 2,
    occasion: "Birthday",
  });

  const [availableTimes, setAvailableTimes] = useState(fetchAPI(today));

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "date") {
      setAvailableTimes(fetchAPI(value));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>
        Datum:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Tijd:
        <select name="time" value={formData.time} onChange={handleChange} required>
          <option value="">Selecteer een tijd</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </label>

      <label>
        Aantal personen:
        <input
          type="number"
          name="guests"
          value={formData.guests}
          min="1"
          max="10"
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Gelegenheid:
        <select name="occasion" value={formData.occasion} onChange={handleChange}>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Business</option>
        </select>
      </label>

      <button type="submit" className="cta-btn">Reserve</button>
    </form>
  );
}