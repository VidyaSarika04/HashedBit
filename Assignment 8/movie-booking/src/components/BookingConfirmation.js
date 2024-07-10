import React from 'react';
import { useLocation } from 'react-router-dom';
function BookingConfirmation() {
  const location = useLocation();
  const { bookingId, name, email, mobile } = location.state;
  return (
    <div className="booking-confirmation">
      <h2>Booking Confirmed!</h2>
      <p>Booking ID: {bookingId}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
    </div>
  );
}
export default BookingConfirmation;