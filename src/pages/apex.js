import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import "./apex.css"; // Optional: import if you add custom styles

const apex = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>Ape-X | Innotexon</title>
        <meta
          name="description"
          content="Ape-X: Guardian Intellect AI is coming soon on Innotexon."
        />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white text-center p-6"
        data-aos="fade-up"
      >
        <div>
          <h1 className="text-5xl font-bold mb-4">Ape-X is Awakening...</h1>
          <p className="text-lg opacity-80 mb-6">
            Guardian Intellect AI for truth, safety, reason, and evolution.
          </p>
          <p className="text-sm text-gray-400">
            Page under development – stay tuned.
          </p>
        </div>
      </div>
    </>
  );
};

export default apex;