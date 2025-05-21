import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./buttonapex.css";

const Buttonapex = ({ position = "bottom-right", onClick }) => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const getPositionClass = () => {
    switch (position) {
      case "top-left":
        return "fixed top-4 left-4";
      case "top-right":
        return "fixed top-4 right-4";
      case "bottom-left":
        return "fixed bottom-4 left-4";
      case "bottom-right":
      default:
        return "fixed bottom-4 right-4";
    }
  };

  return (
    <div className={'${getPositionClass()} z-50'} data-aos="zoom-in">
      <button className="apex-button" onClick={onClick} aria-label="Ape-X Access">
        Ape-X
      </button>
    </div>
  );
};

export default Buttonapex;