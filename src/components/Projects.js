import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Quantum-Tunneled Energy Bridge (QTEB) v1.0',
      description:
        'QTEB is an original energy transfer concept by Innotexon and Kartik Charkhiya. It leverages quantum tunneling principles to enable efficient and stable power transmission across space-time barriers. Currently in the post-development stage, undergoing final refinements and theoretical validations.',
      status: 'Post-Development (Finalizing Phase)',
      note: 'QTEB Master Whitepaper V1.0 releasing soon — stay tuned for full technical insights.'
    },
    {
      id: 2,
      title: 'BioBalancer (BB)',
      description:
        'BB is a synthetic ecosystem node conceptualized by Innotexon and Kartik Charkhiya, aimed at atmospheric restoration. It proposes a fusion of advanced materials and gas-conversion systems to neutralize harmful emissions. The project remains in pre-development while theoretical and structural foundations are still being refined.',
      status: 'Pre-Development (Theory & Core Concepts)'
    },
    {
      id: 3,
      title: 'Hand Of God (HOG)',
      description:
        'HOG is a visionary framework for matter-level manipulation through atomic arrangement and quantum control. Proposed by Innotexon and Kartik Charkhiya, the concept aims to redefine fabrication and creation technologies. It is currently in early theoretical exploration and pre-development.',
      status: 'Pre-Development (Theory & Core Concepts)'
    }
  ];

  return (
    <section
      className="projects-section min-h-screen overflow-x-hidden bg-gray-900 px-6 py-16"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">Our Projects</h2>
      <ul className="max-w-5xl mx-auto space-y-8">
        {projects.map(({ id, title, description, status, note }) => (
          <li
            key={id}
            data-aos="fade-up"
            data-aos-delay={id * 200}
            className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-cyan-500/50 transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-2">{title}</h3>
            <p className="text-gray-300 mb-2 leading-relaxed">{description}</p>
            <p className="italic text-gray-400 mb-2">{status}</p>
            {note && <p className="font-semibold text-cyan-400">{note}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
