import React from 'react';
import logo from '../assets/origianllogo.jpg'; // Make sure the path is correct
import 'aos/dist/aos.css';

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{
        padding: '6rem 2rem',
        textAlign: 'center',
        background: '#f9f9f9',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div data-aos="fade-down">
        <img
          src={logo}
          alt="Innotexon Logo"
          className="logo"
          style={{ width: '150px', marginBottom: '2rem' }}
        />
      </div>
      <h1 data-aos="fade-up" data-aos-delay="200" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Welcome to Innotexon
      </h1>
      <p data-aos="fade-up" data-aos-delay="400" style={{ fontSize: '1.2rem', color: '#555' }}>
        Innovating the future, one breakthrough at a time.
      </p>
    </section>
  );
};

export default Hero;
