import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  const handleDragStart = (e) => {
    e.preventDefault();
    window.open("https://innotexon.com", "_blank");
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-[#2B2E34] shadow-lg transition-all duration-300"
      data-aos="fade-down"
      data-aos-delay="200"
      data-aos-duration="800"
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div
          className="cursor-default select-none"
          draggable="true"
          onDragStart={handleDragStart}
          style={{ maxWidth: "220px" }}
        >
          <img
            src="/textures/innotexon-text.png"
            alt="INNOTEXON"
            className="w-full h-auto object-contain pointer-events-none"
            draggable="true"
            style={{ maxHeight: "96px" }}
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-4 text-sm md:text-base font-medium">
          {[
            { to: "hero", label: "Home" },
            { to: "about", label: "About" },
            { to: "projects", label: "Projects" },
            { to: "contact", label: "Contact" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={500}
              offset={-60}
              className="cursor-pointer select-none bg-gray-700 text-white px-4 py-2 rounded-md shadow-md
                user-select-none
                hover:bg-[#455A64] hover:shadow-lg transition duration-200 flex items-center justify-center"
              onCopy={(e) => e.preventDefault()}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav Placeholder */}
        <div className="md:hidden">{/* Future: Add mobile hamburger menu */}</div>
      </div>
    </header>
  );
};

export default Header;





