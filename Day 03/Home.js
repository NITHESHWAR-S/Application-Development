// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Optional: For additional styling
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import AboutUs from './About';
import ContactUs from './ContactUs';

function Home() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/halls');
  };

  return (
    <div className="Home">
      <div className="carousel-container">
        <Carousel
          autoPlay
          infiniteLoop
          interval={1500}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
        >
          <div>
            <img src="https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-13.jpg" alt="Hall 1" className="gallery-image" />
          </div>
          <div>
            <img src="https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-25.jpg" alt="Hall 2" className="gallery-image" />
          </div>
          <div>
            <img src="https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-12.jpg" alt="Hall 3" className="gallery-image" />
          </div>
          <div>
            <img src="https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-30.jpg" alt="Hall 4" className="gallery-image" />
          </div>
        </Carousel>
      </div>

      <div className="welcome-message">
        <h1>Welcome, students of SKCT!</h1>
        <h4>We're excited to help you with booking halls for your events and activities. Use the navigation bar to explore the different options and make your bookings with ease.</h4>
        <button className="get-started-button" onClick={handleGetStartedClick}>Get Started</button>
      </div>
      <br />
      <br />
      <div>
        <AboutUs />
      </div>

      <div>
        <ContactUs />
      </div>
    </div>
  );
}

export default Home;
