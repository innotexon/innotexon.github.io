import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      className="about-section"
      style={{ padding: '4rem 2rem', backgroundColor: '#f9fafb', color: '#222' }}
      data-aos="fade-up"
    >
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '700' }}>About Innotexon</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '700px', marginBottom: '1.5rem' }}>
        At Innotexon, we don’t just innovate — we redefine the future. Our mission is to harness cutting-edge science and
        technology to build transformative solutions that disrupt conventional industries, empower communities, and
        drive sustainable progress worldwide.
      </p>
      <p style={{ fontSize: '1rem', maxWidth: '700px', marginBottom: '3rem' }}>
        Founded by Kartik Charkhiya, a visionary leader and technology enthusiast, Innotexon is built on a foundation
        of rigorous research, relentless curiosity, and a commitment to excellence. We combine visionary ideas with
        practical execution to deliver real-world impact, pushing the limits of what’s possible.
      </p>
      <div style={{ fontStyle: 'italic', fontWeight: '600', fontSize: '1.1rem' }}>
        Kartik Charkhiya<br />
        Founder & CEO, Innotexon
      </div>
    </section>
  );
};

export default About;