import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

import meta from "./config/metaConfig";
import ScrollToTop from "./utils/scrollToTop";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Buttonapex from "./components/Buttonapex";
import { useNavigate } from "react-router-dom";

// ✅ NEW IMPORT
import TermsConsentModal from "./components/TermsConsentModal";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 80 });
  }, []);

  const handleApexClick = () => {
    navigate("/apex");
  };

  return (
    <div className="App w-full min-h-screen overflow-x-hidden bg-gray-100 text-black">
      {/* ✅ T&C MODAL */}
      <TermsConsentModal />

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

      <Header />
      <section id="hero" data-aos="fade-up"><Hero /></section>
      <section id="about" data-aos="fade-up"><About /></section>
      <section id="projects" data-aos="fade-up"><Projects /></section>
      <section id="contact" data-aos="fade-up"><Contact /></section>
      <Footer />

      {/* Floating Themed + Dark Mode + AOS Animated Ape-X Button */}
      <div data-aos="fade-up" className="fixed bottom-6 right-6 z-50">
        <Buttonapex onClick={handleApexClick} />
      </div>
    </div>
  );
}

export default App;

