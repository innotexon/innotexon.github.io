import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <footer
      className="w-full bg-[#2B2E34] text-gray-300 text-center py-4 md:py-6 select-none user-select-none"
      data-aos="fade-up"
      onCopy={(e) => e.preventDefault()}
      style={{ minHeight: "3rem" }} // ensures visible footer height on all devices
    >
      <p className="text-sm md:text-base">
        © {new Date().getFullYear()} INNOTEXON. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
