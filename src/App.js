// src/App.js

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

import meta from "./config/metaConfig";
import ScrollToTop from "./utils/scrollToTop";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords.join(", ")} />
        <meta name="author" content={meta.author} />
        <meta property="og:type" content={meta.og.type} />
        <meta property="og:url" content={meta.og.url} />
        <meta property="og:image" content={meta.og.image} />
        <meta property="og:title" content={meta.og.title} />
        <meta property="og:description" content={meta.og.description} />
      </Helmet>

      <ScrollToTop />
      <div className="App">
        <Header />

        <main>
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
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;