import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true });
  }, []);

  const contacts = [
    { title: "General Inquiries", email: "contact@innotexon.com" },
    { title: "Support", email: "support@innotexon.com" },
    { title: "Operations", email: "ops@innotexon.com" },
    { title: "Research Labs", email: "labs@innotexon.com" },
    { title: "Legal", email: "legal@innotexon.com" },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen overflow-x-hidden bg-gray-900 text-gray-200 flex justify-center items-center px-6 py-16"
    >
      <div
        className="max-w-lg w-full"
        style={{ textAlign: "left" }}
      >
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold mb-10 text-cyan-400"
        >
          Contact Us
        </h2>

        {contacts.map(({ title, email }, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 300}
            className="mb-8 last:mb-0"
          >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <a
              href={`mailto:${email}`}
              className="text-cyan-400 hover:text-cyan-600 transition-colors duration-300"
            >
              {email}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;


