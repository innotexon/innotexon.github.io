import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Apex from './pages/apex'; // Import Ape-X page
import { HashRouter, Routes, Route } from 'react-router-dom';

// Import AOS and AOS styles
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS animations
AOS.init({
  duration: 1000,
  once: true,
  mirror: false,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/apex" element={<Apex />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);