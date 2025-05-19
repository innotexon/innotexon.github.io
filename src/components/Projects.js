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
    <section className="projects-section" style={{ padding: '3rem 2rem' }}>
      <h2 data-aos="fade-up">Our Projects</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {projects.map(({ id, title, description, status, note }) => (
          <li
            key={id}
            data-aos="fade-up"
            data-aos-delay={id * 200}
            style={{
              marginBottom: '2rem',
              padding: '1.5rem',
              background: '#f9f9f9',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}
          >
            <h3 style={{ marginBottom: '0.5rem', color: '#222' }}>{title}</h3>
            <p style={{ marginBottom: '0.5rem', color: '#555' }}>{description}</p>
            <p style={{ fontStyle: 'italic', color: '#666' }}>{status}</p>
            {note && <p style={{ fontWeight: '600', color: '#007acc' }}>{note}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;