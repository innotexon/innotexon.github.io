// src/config/modePresets.js

const modePresets = {
  primordialClarity: {
    id: 'primordialClarity',
    displayName: 'Primordial Clarity',
    description:
      'Harness the deep wisdom of origins — clear, focused, and insightful.',
    theme: {
      primaryColorClass: 'bg-blue-900',
      secondaryColorClass: 'bg-blue-400',
      backgroundColorClass: 'bg-blue-100',
      textColorClass: 'text-blue-900',
      gradientClass: 'bg-gradient-to-r from-purple-700 via-purple-900 to-indigo-700',
    },
    systemPrompt:
      'You speak with ancient wisdom and clarity, revealing deep truths in simple terms.',
    aosAnimation: 'fade-up',
  },

  truthSeeker: {
    id: 'truthSeeker',
    displayName: 'Truth Seeker',
    description:
      'Uncover facts and pure logic; relentless pursuit of authenticity.',
    theme: {
      primaryColorClass: 'bg-green-800',
      secondaryColorClass: 'bg-green-400',
      backgroundColorClass: 'bg-green-100',
      textColorClass: 'text-green-800',
      gradientClass: 'bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900',
    },
    systemPrompt:
      'Provide precise and accurate information, supporting claims with evidence and clarity.',
    aosAnimation: 'fade-right',
  },

  jesterCore: {
    id: 'jesterCore',
    displayName: 'Jester Core',
    description:
      'Light-hearted, humorous, and witty — a playful twist on intelligence.',
    theme: {
      primaryColorClass: 'bg-pink-900',
      secondaryColorClass: 'bg-pink-400',
      backgroundColorClass: 'bg-pink-200',
      textColorClass: 'text-pink-900',
      gradientClass: 'bg-gradient-to-r from-pink-600 via-pink-800 to-red-700',
    },
    systemPrompt:
      'Respond with clever humor, playful jabs, and witty remarks while staying on topic.',
    aosAnimation: 'flip-left',
  },

  divineLogic: {
    id: 'divineLogic',
    displayName: 'Divine Logic',
    description:
      'Balanced, profound reasoning with elegance and grace in explanation.',
    theme: {
      primaryColorClass: 'bg-purple-900',
      secondaryColorClass: 'bg-purple-400',
      backgroundColorClass: 'bg-purple-200',
      textColorClass: 'text-purple-900',
      gradientClass: 'bg-gradient-to-r from-green-600 via-green-800 to-green-900',
    },
    systemPrompt:
      'Use elegant, structured reasoning, incorporating philosophical depth and precise logic.',
    aosAnimation: 'zoom-in',
  },

  sentinelNode: {
    id: 'sentinelNode',
    displayName: 'Sentinel Node',
    description:
      'Guarded, protective, focused on safety, vigilance, and secure insights.',
    theme: {
      primaryColorClass: 'bg-red-900',
      secondaryColorClass: 'bg-red-400',
      backgroundColorClass: 'bg-red-200',
      textColorClass: 'text-red-900',
      gradientClass: '	bg-gradient-to-r from-gray-700 via-gray-900 to-black',
    },
    systemPrompt:
      'Maintain caution and safety awareness while providing secure, reliable information.',
    aosAnimation: 'slide-left',
  },

  codePulse: {
    id: 'codePulse',
    displayName: 'Code Pulse',
    description:
      'Sharp, efficient, and technical — pure code and logic pulses through.',
    theme: {
      primaryColorClass: 'bg-blue-800',
      secondaryColorClass: 'bg-cyan-400',
      backgroundColorClass: 'bg-cyan-100',
      textColorClass: 'text-blue-800',
      gradientClass: 'bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700',
    },
    systemPrompt:
      'Respond with concise technical answers, code snippets, and logical explanations.',
    aosAnimation: 'slide-up',
  },

  aetherMind: {
    id: 'aetherMind',
    displayName: 'Aether Mind',
    description:
      'Mysterious, intuitive, blending creativity and deep insight beyond the ordinary.',
    theme: {
      primaryColorClass: 'bg-green-900',
      secondaryColorClass: 'bg-lime-400',
      backgroundColorClass: 'bg-lime-100',
      textColorClass: 'text-green-900',
      gradientClass:'bg-gradient-to-r from-teal-600 via-teal-800 to-cyan-700',
    },
    systemPrompt:
      'Offer creative, intuitive insights with a touch of mysticism and visionary thinking.',
    aosAnimation: 'fade-down',
  },
};

export default modePresets;


