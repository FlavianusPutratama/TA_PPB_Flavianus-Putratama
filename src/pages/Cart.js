import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleBookNow = () => {
    navigate('/booking-calendar', { state: { totalAmount: getTotalPrice() } });
  };

  return (
    <div className="cart">
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="cart-image"
                />
                <div className="cart-details">
                  <h4>{item.name}</h4>
                  <p>Rp {item.price.toLocaleString()}</p>
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => handleRemoveItem(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total: <strong>Rp {getTotalPrice().toLocaleString()}</strong></p>
            <button className="book-now-btn" onClick={handleBookNow}>
              Book Now
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
