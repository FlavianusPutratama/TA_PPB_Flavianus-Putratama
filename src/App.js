import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Products from './pages/Products'; 
import Cart from './pages/Cart';
import ProfilePage from './pages/ProfilePage';  
import AboutUs from './pages/AboutUs';  
import Login from './pages/Login';
import BookingCalendar from './pages/BookingCalendar';
import Checkout from './pages/Checkout';
import Details from './pages/Details'; 
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const addBooking = (date) => {
    setBookings((prevBookings) => [...prevBookings, date]);
  };

  return (
    <div className="App">
      <Router>
        <Navbar cartCount={cart.length} user={user} onLogout={handleLogout} />
        <div className="content">
          <Routes>
            {/* Halaman Home */}
            <Route path="/" element={<Home addToCart={addToCart} />} />
            
            {/* Halaman Booking */}
            <Route path="/booking" element={<Booking bookings={bookings} />} />

            {/* Halaman Produk */}
            <Route path="/products" element={<Products addToCart={addToCart} />} />

            {/* Halaman Keranjang */}
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

            {/* Halaman Profil */}
            <Route path="/profile" element={<ProfilePage user={user} />} />

            {/* Halaman Tentang Kami */}
            <Route path="/about-us" element={<AboutUs />} />

            {/* Halaman Login */}
            <Route path="/login" element={<Login setUser={setUser} />} />

            {/* Halaman Kalender Booking */}
            <Route path="/booking-calendar" element={<BookingCalendar setSelectedDate={setSelectedDate} />} />

            {/* Halaman Checkout */}
            <Route
              path="/checkout"
              element={
                <Checkout
                  total={cart.reduce((acc, item) => acc + item.price, 0)}
                  selectedDate={selectedDate}
                  addBooking={addBooking}
                />
              }
            />

            {/* Halaman Detail Produk */}
            <Route
              path="/details/:id"
              element={<Details addToCart={addToCart} />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
