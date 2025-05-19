import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true });
  }, []);

  const containerStyle = {
    padding: "2rem",
    fontFamily: "'Arial', sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
    color: "#222",
  };

  const sectionStyle = {
    marginBottom: "1.8rem",
  };

  const linkStyle = {
    color: "#0070f3",
    textDecoration: "none",
  };

  return (
    <section id="contact" style={containerStyle}>
      <h2 data-aos="fade-up" style={{ marginBottom: "2rem" }}>Contact Us</h2>

      <div data-aos="fade-right" style={sectionStyle}>
        <h3>General Inquiries</h3>
        <p>
          <a href="mailto:contact@innotexon.com" style={linkStyle}>
            contact@innotexon.com
          </a>
        </p>
      </div>

      <div data-aos="fade-left" style={sectionStyle}>
        <h3>Support</h3>
        <p>
          <a href="mailto:support@innotexon.com" style={linkStyle}>
            support@innotexon.com
          </a>
        </p>
      </div>

      <div data-aos="fade-right" style={sectionStyle}>
        <h3>Operations</h3>
        <p>
          <a href="mailto:ops@innotexon.com" style={linkStyle}>
            ops@innotexon.com
          </a>
        </p>
      </div>

      <div data-aos="fade-left" style={sectionStyle}>
        <h3>Research Labs</h3>
        <p>
          <a href="mailto:labs@innotexon.com" style={linkStyle}>
            labs@innotexon.com
          </a>
        </p>
      </div>

      <div data-aos="fade-up" style={sectionStyle}>
        <h3>Legal</h3>
        <p>
          <a href="mailto:legal@innotexon.com" style={linkStyle}>
            legal@innotexon.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;