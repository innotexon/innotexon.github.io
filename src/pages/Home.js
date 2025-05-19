import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 80 });
  }, []);

  return (
    <>
      <section id="hero" data-aos="fade-up">
        <Hero />
      </section>

      <section id="about" data-aos="fade-up" data-aos-delay="100">
        <About />
      </section>

      <section id="projects" data-aos="fade-up" data-aos-delay="200">
        <Projects />
      </section>

      <section id="contact" data-aos="fade-up" data-aos-delay="300">
        <Contact />
      </section>
    </>
  );
};

export default Home;