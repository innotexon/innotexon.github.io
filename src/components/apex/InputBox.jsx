import React, { useRef, useEffect } from 'react';
import { SendHorizonal } from 'lucide-react'; // Lightweight icon from lucide-react

const InputBox = ({ value, onChange, onKeyDown, onSend, disabled, mode }) => {
  const modeStyles = {
    primordialClarity: 'bg-purple-700 placeholder-purple-300 text-white',
    truthSeeker: 'bg-blue-700 placeholder-blue-300 text-white',
    jesterCore: 'bg-pink-600 placeholder-pink-200 text-white',
    divineLogic: 'bg-green-700 placeholder-green-300 text-white',
    sentinelNode: 'bg-gray-800 placeholder-gray-400 text-white',
    codePulse: 'bg-yellow-500 placeholder-yellow-800 text-black',
    aetherMind: 'bg-teal-600 placeholder-cyan-300 text-white',
  };

  const placeholders = {
    primordialClarity: 'Speak with Primordial Clarity...',
    truthSeeker: 'Ask the Truth Seeker...',
    jesterCore: 'Joke or play with Jester Core...',
    divineLogic: 'Invoke Divine Logic here...',
    sentinelNode: 'Command the Sentinel Node...',
    codePulse: 'Code Pulse is listening...',
    aetherMind: 'Connect with the Aether Mind...',
  };

  const placeholder = placeholders[mode] || 'Type your message...';
  const inputBgStyle = modeStyles[mode] || 'bg-gray-800 placeholder-gray-400 text-white';

  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const maxHeight = 5 * 24;
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, maxHeight) + 'px';
      textareaRef.current.style.overflowY = textareaRef.current.scrollHeight > maxHeight ? 'auto' : 'hidden';
    }
  }, [value]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!disabled && value.trim()) onSend();
    }
    if (onKeyDown) onKeyDown(e);
  };

  return (
    <div
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2
        flex items-end sm:items-center gap-3
        w-[90%] sm:w-full max-w-4xl
        bg-white/20 backdrop-blur-md
        px-4 sm:px-6 py-3 sm:py-4
        rounded-xl shadow-xl
        transition hover:bg-opacity-40
        z-50
      "
    >
      <textarea
        ref={textareaRef}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        rows={1}
        maxLength={1000}
        className={`
          flex-grow resize-none
          rounded-md px-4 py-3 text-base sm:text-lg
          focus:outline-none focus:ring-2 focus:ring-indigo-500
          transition placeholder-opacity-80
          ${inputBgStyle}
          bg-opacity-80
          leading-6 font-sans
          overflow-hidden
        `}
        aria-label={`Input for ${mode} mode`}
        spellCheck={false}
        autoComplete="off"
      />

      {/* Hex Send Button */}
      <button
        onClick={onSend}
        disabled={disabled}
        aria-label="Send message"
        type="button"
        className={`
          group
          relative
          disabled:opacity-50 disabled:cursor-not-allowed
          w-12 h-12 sm:w-14 sm:h-14
          p-0
          bg-indigo-600 hover:bg-indigo-700
          text-white
          transition
          focus:outline-none focus:ring-2 focus:ring-indigo-500
          clip-hexagon
        `}
      >
        <SendHorizonal className="mx-auto w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
      </button>
    </div>
  );
};

export default InputBox;





