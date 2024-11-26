import React from 'react';
import './Booking.css';

function Booking({ bookings }) {
  return (
    <div className="booking-container">
      <h2>Your Bookings</h2>
      {bookings.length === 0 ? (
        <p>You have no bookings yet.</p>
      ) : (
        <ul className="booking-list">
          {bookings.map((date, index) => (
            <li key={index} className="booking-item">
              Booking Date: {new Date(date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Booking;
