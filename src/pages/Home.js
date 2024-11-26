import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home({ addToCart }) {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollToRef = useRef(null); // Tambahkan useRef di sini

  const images = [
    'https://img.freepik.com/free-photo/car-wash-detailing-station_1303-22307.jpg?semt=ais_hybrid',
    'https://media.istockphoto.com/id/1800033825/photo/hand-cleaning-the-car-interior-with-microfiber-cloth-towel.jpg?s=612x612&w=0&k=20&c=bz4YG60xCvOifo0jz1BbThdW0lA1hWS9I85o-Wdxj0A=',
    'https://as1.ftcdn.net/v2/jpg/04/87/77/84/1000_F_487778499_gtjTobA3L6IyBCiAay50hT2KvOCny6gv.jpg',
  ];

  const services = [
    {
      id: 1,
      name: 'Interior Detailing',
      price: 200000,
      image: 'https://media.istockphoto.com/id/1800033825/photo/hand-cleaning-the-car-interior-with-microfiber-cloth-towel.jpg?s=612x612&w=0&k=20&c=bz4YG60xCvOifo0jz1BbThdW0lA1hWS9I85o-Wdxj0A=',
    },
    {
      id: 2,
      name: 'Coating',
      price: 700000,
      image: 'https://www.shutterstock.com/image-photo/car-detailing-studio-wash-worker-600nw-2421533503.jpg',
    },
    {
      id: 3,
      name: 'Polishing',
      price: 400000,
      image: 'https://www.shutterstock.com/image-photo/car-detailing-polishing-concept-hands-600nw-1703968147.jpg',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleDetails = (service) => {
    navigate(`/details/${service.id}`, { state: service });
  };

  const handleExploreMore = () => {
    scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      <div className="slider">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`slide-image ${currentSlide === index ? 'active' : ''}`}
          />
        ))}
        <button className="explore-btn" onClick={handleExploreMore}>
          Explore More
        </button>
      </div>

      <div className="best-seller" ref={scrollToRef}>
        <h3>Best Seller</h3>
        <div className="service-list">
          {services.map((service) => (
            <div 
              className="service-item"
              key={service.id}
              onClick={() => handleDetails(service)} // Navigasi saat area service-item diklik
            >
              <img
                src={service.image}
                alt={service.name}
                className="service-image"
              />
              <h4>{service.name}</h4>
              <p>Rp {service.price.toLocaleString()}</p>
              <button
                className="add-to-cart-btn"
                onClick={(e) => {
                  e.stopPropagation(); // Mencegah klik pada wrapper memicu navigasi
                  addToCart(service);
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
