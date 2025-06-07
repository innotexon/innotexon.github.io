import React from 'react';
import { modeStyles } from '../../config/modeStyles';

const HeaderBar = ({ currentMode }) => {
  const style = modeStyles[currentMode];

  if (!style) {
    return (
      <div className="text-center text-red-500 font-bold mt-4">
        ⚠️ Unknown Mode
      </div>
    );
  }

  return (
    <div
      className={`w-full p-6 rounded-xl border ${style.bg} ${style.border} ${style.shadow} ${style.glow}`}
      data-aos="fade-down"
    >
      <div className={`text-center ${style.text}`}>
        <h2 className="text-2xl font-bold tracking-wide uppercase">{style.label}</h2>
        <p className="text-sm italic mt-1">{style.subtitle}</p>
      </div>
    </div>
  );
};

export default HeaderBar;


