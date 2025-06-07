import React from 'react';
import logo from '../assets/origianllogo.jpg'; // Verify the path
import 'aos/dist/aos.css';

const Hero = () => {
  return (
    <section
      className="hero-section min-h-screen flex flex-col justify-center items-center px-6 py-24 bg-gradient-to-br from-gray-900 via-cyan-900 to-blue-900 text-cyan-300 overflow-x-hidden"
      data-aos="fade-up"
    >
      <div data-aos="fade-down" className="mb-8">
        <img
          src={logo}
          alt="Innotexon Logo"
          className="w-36 md:w-48 rounded-lg shadow-lg"
        />
      </div>

      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-4xl md:text-6xl font-extrabold mb-4 max-w-4xl text-center leading-tight tracking-wide"
      >
        Innotexon: Forging Tomorrow’s Reality Today
      </h1>

      <p
        data-aos="fade-up"
        data-aos-delay="400"
        className="text-lg md:text-xl max-w-3xl text-center text-gray-300 font-semibold"
      >
        Engineering transformative breakthroughs through visionary science and relentless innovation — shaping the future with purpose and precision.
      </p>
    </section>
  );
};

export default Hero;

