import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true }); // smooth, one-time animation
  }, []);

  return (
    <footer className="footer" data-aos="fade-up">
      <p>© {new Date().getFullYear()} INNOTEXON. All rights reserved.</p>
    </footer>
  );
};

export default Footer;