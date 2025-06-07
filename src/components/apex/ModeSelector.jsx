import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const modeLabels = {
  primordialClarity: 'Primordial Clarity',
  truthSeeker: 'Truth Seeker',
  jesterCore: 'Jester Core',
  divineLogic: 'Divine Logic',
  sentinelNode: 'Sentinel Node',
  codePulse: 'Code Pulse',
  aetherMind: 'Aether Mind',
};

const aosMap = {
  primordialClarity: 'fade-up',
  truthSeeker: 'fade-up',
  jesterCore: 'fade-up',
  divineLogic: 'fade-up',
  sentinelNode: 'fade-up',
  codePulse: 'fade-up',
  aetherMind: 'fade-up',
};

const activeBgColors = {
  primordialClarity: 'bg-purple-700 text-white',
  truthSeeker: 'bg-blue-700 text-white',
  jesterCore: 'bg-pink-600 text-white',
  divineLogic: 'bg-green-700 text-white',
  sentinelNode: 'bg-gray-800 text-white',
  codePulse: 'bg-yellow-500 text-black',
  aetherMind: 'bg-teal-600 text-white',
};

const inactiveClasses = `
  bg-gray-200 text-gray-700 hover:bg-gray-300 
  focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 
  transition-all duration-300 ease-in-out
`;

// Custom fade delays to sync animation order on desktop (Primordial first, Aether last)
const animationDelays = {
  primordialClarity: 0,
  truthSeeker: 150,
  jesterCore: 300,
  divineLogic: 450,
  sentinelNode: 600,
  codePulse: 750,
  aetherMind: 900,
};

const ModeSelector = ({ currentMode, onChange }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Init AOS
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-in-out' });
    AOS.refresh();
  }, []);

  // Close dropdown when clicking outside (mobile dropdown)
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  // Detect if user prefers mobile view by window width (No CSS breakpoint toggling)
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    function checkMobileView() {
      setIsMobileView(window.innerWidth < 768);
    }
    checkMobileView();
    window.addEventListener('resize', checkMobileView);
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  // --- RENDERING ---

  if (isMobileView) {
    // Mobile mode: single button with dropdown
    return (
      <div className="relative inline-block w-full max-w-xs mx-auto" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          aria-haspopup="listbox"
          aria-expanded={isDropdownOpen}
          className={`w-full flex justify-between items-center rounded-md px-4 py-2 font-semibold text-lg
            ${activeBgColors[currentMode] || 'bg-gray-800 text-white'}
            focus:outline-none focus:ring-2 focus:ring-indigo-500
            transition
            shadow-md
            select-none
          `}
        >
          {modeLabels[currentMode]}
          <svg
            className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${
              isDropdownOpen ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        {isDropdownOpen && (
          <ul
            role="listbox"
            tabIndex={-1}
            className="absolute z-50 mt-1 w-full bg-white rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none"
          >
            {Object.entries(modeLabels).map(([key, label]) => {
              const isActive = key === currentMode;
              return (
                <li
                  key={key}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    onChange(key);
                    setDropdownOpen(false);
                  }}
                  className={`cursor-pointer select-none px-4 py-2 text-sm font-medium
                    ${
                      isActive
                        ? `${activeBgColors[key]}`
                        : 'text-gray-900 hover:bg-indigo-100'
                    }
                    transition-colors duration-200 ease-in-out
                  `}
                >
                  {label}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }

  // Desktop mode: full buttons with synced fade-up animations
  return (
    <div className="flex flex-wrap gap-3 justify-center p-4">
      {Object.entries(modeLabels).map(([key, label]) => {
        const isActive = key === currentMode;

        return (
          <button
            key={key}
            type="button"
            className={`relative rounded-md px-5 py-2 font-semibold text-sm shadow-md
              ${isActive ? activeBgColors[key] : inactiveClasses}
              ${isActive ? 'scale-105 shadow-xl ring-2 ring-white/50' : 'scale-100'}
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-lg
            `}
            onClick={() => onChange(key)}
            data-aos={aosMap[key]}
            data-aos-delay={animationDelays[key]}
            aria-pressed={isActive}
          >
            {label}

            {isActive && (
              <span
                className={`
                  absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse ring-2 ring-white
                  ${
                    key === 'primordialClarity' ? 'bg-purple-400 shadow-purple-400/50' :
                    key === 'truthSeeker' ? 'bg-blue-400 shadow-blue-400/50' :
                    key === 'jesterCore' ? 'bg-pink-400 shadow-pink-400/50' :
                    key === 'divineLogic' ? 'bg-green-400 shadow-green-400/50' :
                    key === 'sentinelNode' ? 'bg-gray-400 shadow-gray-400/50' :
                    key === 'codePulse' ? 'bg-yellow-300 shadow-yellow-400/50' :
                    key === 'aetherMind' ? 'bg-teal-400 shadow-teal-400/50' :
                    ''
                  }
                `}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ModeSelector;


// This component allows users to select different modes with visual feedback
// and animations. It uses AOS for animations and provides a clean, responsive UI.

