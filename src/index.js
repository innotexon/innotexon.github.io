import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Apex from './pages/apex';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToBottom from './components/ScrollToBottom';
import AOS from 'aos';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  mirror: false,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToBottom>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/apex" element={<Apex />} />
        </Routes>
      </ScrollToBottom>
    </HashRouter>
  </React.StrictMode>
);
