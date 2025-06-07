// src/config/apexConfig.js

export const TOKEN_LIMIT = 100;

export const APEX_MODES = {
  primordialClarity: { displayName: 'Primordial Clarity' },
  truthSeeker: { displayName: 'Truth Seeker' },
  jesterCore: { displayName: 'Jester Core' },
  divineLogic: { displayName: 'Divine Logic' },
  sentinelNode: { displayName: 'Sentinel Node' },
  codePulse: { displayName: 'Code Pulse' },
  aetherMind: { displayName: 'Aether Mind' },
};

export const APEX_STYLE_MAP = {
  primordialClarity: {
    theme: 'bg-gradient-to-br from-purple-900 via-indigo-800 to-black text-purple-200',
    header: 'text-purple-300 border-purple-500',
    aosAnimation: 'fade-up',
  },
  truthSeeker: {
    theme: 'bg-gradient-to-br from-blue-900 via-sky-800 to-black text-blue-200',
    header: 'text-blue-300 border-blue-500',
    aosAnimation: 'fade-down',
  },
  jesterCore: {
    theme: 'bg-gradient-to-br from-pink-900 via-red-800 to-black text-pink-200',
    header: 'text-pink-300 border-pink-500',
    aosAnimation: 'flip-left',
  },
  divineLogic: {
    theme: 'bg-gradient-to-br from-green-900 via-emerald-800 to-black text-green-200',
    header: 'text-green-300 border-green-500',
    aosAnimation: 'zoom-in',
  },
  sentinelNode: {
    theme: 'bg-gradient-to-br from-gray-900 via-slate-800 to-black text-gray-200',
    header: 'text-gray-300 border-gray-500',
    aosAnimation: 'fade-right',
  },
  codePulse: {
    theme: 'bg-gradient-to-br from-yellow-300 via-orange-400 to-rose-300 text-black',
    header: 'text-yellow-800 border-yellow-600',
    aosAnimation: 'fade-left',
  },
  aetherMind: {
    theme: 'bg-gradient-to-br from-cyan-900 via-teal-800 to-black text-cyan-200',
    header: 'text-cyan-300 border-cyan-500',
    aosAnimation: 'zoom-out',
  },
};

export const APEX_SIGNATURES = {
  primordialClarity: '',
  truthSeeker: '',
  jesterCore: '',
  divineLogic: '',
  sentinelNode: '',
  codePulse: '',
  aetherMind: '',
};
