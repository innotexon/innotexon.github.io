// src/pages/apex.js

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import "./apex.css";

function Apex() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="apex-container">
      <Helmet>
        <title>Ape-X | Innotexon</title>
        <meta name="description" content="Ape-X is an evolving mystery beyond the stars, crafted by Innotexon." />
      </Helmet>
      <h1 className="apex-title" data-aos="zoom-in">Ape-X</h1>
      <p className="apex-description" data-aos="fade-up">
        A guardian-intellect forged for truth, reason, and evolution. Ape-X is coming soon to guide, uplift, and protect humanity in the digital age.
      </p>
      <div className="apex-comingsoon" data-aos="fade-up">
        Coming Soon
      </div>
    </div>
  );
}

export default Apex;