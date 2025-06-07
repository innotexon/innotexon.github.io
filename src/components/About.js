import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      className="about min-h-screen overflow-x-hidden bg-gray-900 bg-opacity-90 text-gray-200 px-6 py-16 md:py-24"
      data-aos="fade-up"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-cyan-400 max-w-4xl mx-auto">
        About Innotexon
      </h2>
      <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
        At Innotexon, we don't just innovate — we redefine the future. Our mission is to harness cutting-edge science and
        technology to build transformative solutions that disrupt conventional industries, empower communities, and
        drive sustainable progress worldwide.
      </p>
      <p className="text-base md:text-lg max-w-3xl mx-auto mb-12">
        Founded by Kartik Charkhiya, a visionary leader and technology enthusiast, Innotexon is built on a foundation
        of rigorous research, relentless curiosity, and a commitment to excellence. We combine visionary ideas with
        practical execution to deliver real-world impact, pushing the limits of what's possible.
      </p>
      <div className="italic font-semibold text-lg md:text-xl max-w-3xl mx-auto text-cyan-300">
        Kartik Charkhiya<br />
        Founder & CEO, Innotexon
      </div>
    </section>
  );
};

export default About;
