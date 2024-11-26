import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h2 className="about-us-title">About TimelessDetails</h2>
      <p className="about-us-description">
        Welcome to TimelessDetails, the best car detailing workshop in town! We specialize in providing high-quality car wash, coating, and polishing services to keep your car clean, protected, and looking like new.
      </p>
      <div className="about-us-content">
        <h3 className="about-us-subtitle">Our Vision</h3>
        <p>
          Our vision is to be the leading provider of car detailing services with a focus on quality, customer satisfaction, and attention to detail.
        </p>

        <h3 className="about-us-subtitle">Our Mission</h3>
        <ul>
          <li>Provide complete and professional car detailing services.</li>
          <li>Maintain high service and product quality to ensure customer satisfaction.</li>
          <li>Introduce the latest technology in car care for optimal results.</li>
        </ul>

        <h3 className="about-us-subtitle">Why Choose Us?</h3>
        <p>
          At TimelessDetails, we use high-quality products and modern equipment designed to give the best care for your car. Our team consists of skilled experts who are trained and experienced in the field of car detailing.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
