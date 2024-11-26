import React from 'react';

function Invoice() {
  const handlePayment = () => {
    alert('Thank you for your payment!');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h3>Invoice</h3>
      <p>Your total payment has been processed.</p>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#4caf50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={handlePayment}
      >
        Confirm Payment
      </button>
    </div>
  );
}

export default Invoice;
