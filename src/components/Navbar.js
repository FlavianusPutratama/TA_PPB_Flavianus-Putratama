import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Impor useNavigate
import { FaHome, FaBook, FaTags, FaShoppingCart, FaUser, FaSignInAlt } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ cartCount, user, onLogout }) {
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleAvatarClick = () => {
    navigate('/profile');  // Mengarahkan ke halaman ProfilePage
  };

  const handleAboutUsClick = () => {
    navigate('/about-us');  // Mengarahkan ke halaman AboutUs
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          Timeless <span>Details</span>
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">
            <FaHome className="nav-icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/booking" className="nav-link">
            <FaBook className="nav-icon" /> Booking
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-link">
            <FaTags className="nav-icon" /> Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-link">
            <FaShoppingCart className="nav-icon" /> Cart 
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="nav-link"> {/* Mengganti button dengan Link */}
            <FaUser className="nav-icon" /> About Us
          </Link>
        </li>
        {user ? (
          <li className="nav-user">
            <img 
              src={user.avatar} 
              alt={user.first_name} 
              className="user-avatar" 
              onClick={handleAvatarClick} // Menambahkan event onClick
            />
            <button className="nav-link logout-btn" onClick={onLogout}>
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link to="/login" className="nav-link">
              <FaSignInAlt className="nav-icon" /> Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
