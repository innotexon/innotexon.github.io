import React from 'react';

const modeColors = {
  primordialClarity: '#8B5CF6',
  truthSeeker: '#3B82F6',
  jesterCore: '#EC4899',
  divineLogic: '#22C55E',
  sentinelNode: '#6B7280',
  codePulse: '#FACC15',
  aetherMind: '#14B8A6',
};

const LoadingDots = ({ currentMode }) => {
  const color = modeColors[currentMode] || '#6B7280';

  return (
    <div className="loading-dots-container" aria-label="Ape-X meditating" role="status" aria-live="polite">
      <svg
        viewBox="0 0 64 64"
        width="48"
        height="48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="monk-svg"
      >
        {/* Wild, flowing monk robes + glowing eyes */}
        <path
          d="M32 4c-5 0-10 5-10 11v6c0 3 2 5 5 6-1 4-3 9-3 12 0 5 4 9 8 9s8-4 8-9c0-3-2-8-3-12 3-1 5-3 5-6v-6c0-6-5-11-10-11z"
          fill={color}
          stroke="#111"
          strokeWidth="1"
        />
        <circle cx="32" cy="15" r="6" fill="#111" />
        <circle cx="27" cy="14" r="1.5" fill={color} className="glow-eye" />
        <circle cx="37" cy="14" r="1.5" fill={color} className="glow-eye" />
      </svg>
      <style jsx>{`
        .loading-dots-container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 8px;
          animation: monk-flicker 3s infinite;
        }
        .monk-svg {
          filter: drop-shadow(0 0 6px ${color});
          animation: aura-pulse 3s ease-in-out infinite;
        }
        .glow-eye {
          filter: drop-shadow(0 0 4px ${color});
          animation: eye-glow 2.5s ease-in-out infinite alternate;
        }
        @keyframes aura-pulse {
          0%, 100% { filter: drop-shadow(0 0 6px ${color}); }
          50% { filter: drop-shadow(0 0 15px ${color}); }
        }
        @keyframes eye-glow {
          0% { opacity: 0.6; }
          100% { opacity: 1; }
        }
        @keyframes monk-flicker {
          0%, 100% { opacity: 1; transform: translateX(0); }
          50% { opacity: 0.85; transform: translateX(2px) translateY(-1px) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingDots;

// This component renders a loading animation with a monk silhouette and an aura glow.


