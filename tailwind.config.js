/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        innotexon: {
          blue: '#1e90ff',
          dark: '#007acc',
          gray: '#f5f7fa',
        },
      },
      fontFamily: {
        base: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        scripture: ['"Cormorant Garamond"', 'serif'],
        emoji: [
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji',
          'emoji',
        ]
      },
      clipPath: {
        hexagon: 'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'flip-up': {
          '0%': { transform: 'perspective(600px) rotateX(90deg)', opacity: '0' },
          '100%': { transform: 'perspective(600px) rotateX(0deg)', opacity: '1' },
        },
        'flip-left': {
          '0%': { transform: 'perspective(600px) rotateY(90deg)', opacity: '0' },
          '100%': { transform: 'perspective(600px) rotateY(0deg)', opacity: '1' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(0.4)', opacity: '0' },
          '60%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'zoom-out': {
          '0%': { transform: 'scale(1.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'bounce-spring': {
          '0%, 100%': { transform: 'translateY(-30%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 10px rgba(30, 144, 255, 0.7)' },
          '50%': { opacity: '0.7', boxShadow: '0 0 25px rgba(30, 144, 255, 1)' },
        },
        'shake-wobble': {
          '0%, 100%': { transform: 'translateX(0)' },
          '15%, 45%, 75%': { transform: 'translateX(-8px)' },
          '30%, 60%, 90%': { transform: 'translateX(8px)' },
        },
        'glow-pulse': {
          '0%, 100%': { filter: 'drop-shadow(0 0 6px #1e90ff)' },
          '50%': { filter: 'drop-shadow(0 0 18px #007acc)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s cubic-bezier(0.4,0,0.2,1) forwards',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.4,0,0.2,1) forwards',
        'fade-down': 'fade-down 0.6s cubic-bezier(0.4,0,0.2,1) forwards',
        'fade-left': 'fade-left 0.6s cubic-bezier(0.4,0,0.2,1) forwards',
        'fade-right': 'fade-right 0.6s cubic-bezier(0.4,0,0.2,1) forwards',
        'slide-up': 'slide-up 0.5s cubic-bezier(0.4,0,0.2,1) forwards',
        'slide-down': 'slide-down 0.5s cubic-bezier(0.4,0,0.2,1) forwards',
        'slide-left': 'slide-left 0.5s cubic-bezier(0.4,0,0.2,1) forwards',
        'slide-right': 'slide-right 0.5s cubic-bezier(0.4,0,0.2,1) forwards',
        'flip-up': 'flip-up 0.7s cubic-bezier(0.4,0,0.2,1) forwards',
        'flip-left': 'flip-left 0.7s cubic-bezier(0.4,0,0.2,1) forwards',
        'zoom-in': 'zoom-in 0.6s cubic-bezier(0.4,0,0.2,1) forwards',
        'zoom-out': 'zoom-out 0.5s cubic-bezier(0.4,0,0.2,1) forwards',
        'bounce-spring': 'bounce-spring 1s infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        'shake-wobble': 'shake-wobble 0.8s ease-in-out',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.clip-hexagon': {
          clipPath: 'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)',
        },
      });
    },
  ],
};



// This Tailwind CSS configuration file extends the default theme with custom colors, fonts, and animations.
// It includes a variety of animations such as fade, slide, flip, zoom, bounce, pulse, and shake effects.
// The animations are defined using keyframes and can be applied to elements using the `animate-` prefix.
// The configuration also specifies the content paths to scan for class names, ensuring that Tailwind generates the necessary styles.