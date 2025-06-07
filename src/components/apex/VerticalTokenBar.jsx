import React from 'react';

const MAX_TOKENS = 50;

const getColor = (percentage) => {
  if (percentage >= 0.8) return '#22c55e'; // Green
  if (percentage >= 0.6) return '#a3e635'; // Light Green
  if (percentage >= 0.4) return '#eab308'; // Yellow
  if (percentage >= 0.2) return '#f97316'; // Orange
  return '#dc2626'; // Red
};

const VerticalTokenBar = ({ tokensLeft }) => {
  const usageRatio = Math.min(Math.max(tokensLeft / MAX_TOKENS, 0), 1);
  const barHeight = usageRatio * 100;
  const fillColor = getColor(usageRatio);

  return (
    <aside
      className="
        fixed top-0 left-0
        w-2 sm:w-3
        h-screen
        pointer-events-none
        bg-transparent
        z-[9999]
        flex items-end
        px-0.5 sm:px-1
        select-none
      "
      role="progressbar"
      aria-label="Token usage"
      aria-valuemax={MAX_TOKENS}
      aria-valuemin={0}
      aria-valuenow={tokensLeft}
    >
      <div
        style={{
          height: `${barHeight}%`,
          backgroundColor: fillColor,
          borderRadius: '0 8px 8px 0',
          boxShadow: `0 0 12px ${fillColor}`,
          transition: 'height 0.3s ease-in-out, background-color 0.3s ease-in-out',
          width: '100%',
          minWidth: '4px',
        }}
      />
    </aside>
  );
};

export default VerticalTokenBar;


