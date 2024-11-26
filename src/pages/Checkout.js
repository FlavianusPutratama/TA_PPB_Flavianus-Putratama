import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

function Checkout({ total, selectedDate, addBooking }) {
  const navigate = useNavigate();

  const handleCompletePayment = () => {
    if (selectedDate) {
      addBooking(selectedDate); // Tambahkan tanggal booking
      navigate('/booking'); // Arahkan ke halaman Booking
    } else {
      alert('Please select a booking date before completing payment.');
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <p>Total Amount: Rp {total.toLocaleString()}</p>
      {selectedDate ? (
        <p>Booking Date: {selectedDate.toLocaleDateString()}</p>
      ) : (
        <p style={{ color: 'red' }}>No booking date selected.</p>
      )}
      <div className="qr-code">
        <QRCodeCanvas value={`Rp ${total.toLocaleString()}`} />
      </div>
      <button 
        className="btn-complete-payment" 
        onClick={handleCompletePayment}
      >
        Complete Payment
      </button>
    </div>
  );
}

export default Checkout;
