import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import BookingForm from "../components/BookingForm";

export default function ReservationsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="reservations">
          <h3>Reserve a table</h3>
          <BookingForm />
        </section>
      </main>
    </>
  );
}