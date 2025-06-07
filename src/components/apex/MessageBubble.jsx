import React, { useState, useRef, useEffect } from 'react';
import ModeBadge from './ModeBadge';
import { APEX_STYLE_MAP, APEX_SIGNATURES } from '../../config/apexConfig';
import { FiEdit2, FiCopy, FiCheck, FiX } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';
import { EmojioneV4 } from 'react-emoji-render';

const MessageBubble = ({
  message,
  onEdit,
  onCopy,
  isEditing = false,
  setEditMessageId,
  updateMessageContent,
}) => {
  const [hovered, setHovered] = useState(false);
  const [copiedUser, setCopiedUser] = useState(false);
  const [copiedApex, setCopiedApex] = useState(false);
  const [editText, setEditText] = useState(message.content);
  const timeoutUserRef = useRef(null);
  const timeoutApexRef = useRef(null);
  const longPressTimeout = useRef(null);
  const buttonsTimeoutRef = useRef(null);
  const [showButtonsMobile, setShowButtonsMobile] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.message-bubble-container')) {
        setShowButtonsMobile(false);
      }
    };
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('touchstart', handleClickOutside);
      clearTimeout(timeoutUserRef.current);
      clearTimeout(timeoutApexRef.current);
      clearTimeout(longPressTimeout.current);
      clearTimeout(buttonsTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isEditing) setEditText(message.content);
  }, [message.content, isEditing]);

  const { content, role, mode } = message;
  const isUser = role === 'user';
  const preset = APEX_STYLE_MAP[mode] || {};
  const signature = APEX_SIGNATURES[mode] || '';
  const tailwindAnimation = preset.tailwindAnimation || 'animate-fade-up';

  // Copy handler
  const handleCopy = (text, forUser = false) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    if (forUser) {
      setCopiedUser(true);
      clearTimeout(timeoutUserRef.current);
      timeoutUserRef.current = setTimeout(() => setCopiedUser(false), 2000);
    } else {
      setCopiedApex(true);
      clearTimeout(timeoutApexRef.current);
      timeoutApexRef.current = setTimeout(() => setCopiedApex(false), 2000);
    }
    if (onCopy) onCopy();
  };

  // User message buttons fade logic
  const showUserButtons = hovered || showButtonsMobile;
  useEffect(() => {
    if (showUserButtons) {
      clearTimeout(buttonsTimeoutRef.current);
      buttonsTimeoutRef.current = setTimeout(() => {
        setShowButtonsMobile(false);
      }, 3000);
    }
  }, [showUserButtons]);

  // Mobile long press for user buttons
  const handleTouchStart = () => {
    if (!isUser) return;
    longPressTimeout.current = setTimeout(() => {
      setShowButtonsMobile(true);
    }, 500);
  };

  if (
    !message ||
    typeof message !== 'object' ||
    typeof message.content !== 'string' ||
    typeof message.role !== 'string' ||
    typeof message.mode !== 'string'
  ) {
    console.warn('🧩 Skipping invalid message:', message);
    return null;
  }

  const handleTouchEnd = () => {
    clearTimeout(longPressTimeout.current);
  };

  // Icon colors
  const baseIconColor = 'text-gray-400';
  const hoverIconColor = 'hover:text-gray-800 dark:hover:text-gray-200';
  const copiedIconColor = 'text-green-500';

  // Markdown + Emoji Renderer
  const renderers = {
    text: ({ children }) => <EmojioneV4 text={children[0]} />,
  };

  // === EDIT MODE ===
  if (isEditing) {
    return (
      <div
        className="relative flex my-2 message-bubble-container justify-end opacity-100 animate-fade-up"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="relative max-w-xl p-3 rounded-lg shadow-md bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white rounded-br-none flex items-center space-x-2 transition-all duration-300 ease-in-out transform hover:scale-[1.02] focus-within:scale-[1.02] focus-within:shadow-lg"
          style={{
            fontFamily: '"inherit"',
            fontSize: '1rem',
            lineHeight: '1.5rem',
            WebkitFontSmoothing: 'antialiased',
            textRendering: 'optimizeLegibility',
            boxShadow:
              '0 0 8px rgba(59, 130, 246, 0.7), 0 0 16px rgba(139, 92, 246, 0.6), 0 0 24px rgba(236, 72, 153, 0.5)',
          }}
        >
          <input
            type="text"
            className="flex-grow bg-transparent border border-white/40 rounded px-3 py-2 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter' && editText.trim() !== '') {
                updateMessageContent(message.timestamp, editText.trim());
              }
              if (e.key === 'Escape') {
                setEditMessageId(null);
              }
            }}
            spellCheck={false}
          />
          <button
            onClick={() => setEditMessageId(null)}
            aria-label="Cancel edit"
            className="text-red-400 hover:text-red-600 p-1 transition-colors duration-200"
            title="Cancel"
          >
            <FiX size={24} />
          </button>
          <button
            onClick={() => {
              if (editText.trim() !== '') {
                updateMessageContent(message.timestamp, editText.trim());
              }
            }}
            aria-label="Save edit"
            className={`text-green-400 hover:text-green-600 p-1 transition-colors duration-200 ${
              editText.trim() === '' ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            title="Save"
            disabled={editText.trim() === ''}
          >
            <FiCheck size={24} />
          </button>
        </div>
      </div>
    );
  }

  // === APEX RESPONSE (NO BOX, JUST BACKGROUND & TEXT) ===
  if (!isUser) {
    return (
      <div
        className={`relative my-6 w-full message-bubble-container ${tailwindAnimation}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          background: preset.background || 'transparent',
          color: preset.textColor || 'white',
          fontFamily: `"Cormorant Garamond", serif`,
          fontSize: '1.125rem',
          lineHeight: '1.8rem',
          padding: '3rem 2rem 4rem 2rem', // spacing top, sides, bottom for copy button
          whiteSpace: 'pre-wrap',
          userSelect: 'text',
          position: 'relative',
          borderRadius: 0,
        }}
      >
        <ReactMarkdown components={renderers}>{content}</ReactMarkdown>

        {signature && (
          <div className="text-sm italic text-gray-400 select-none mt-6 text-right font-scripture">
            {signature}
          </div>
        )}
        <div className="flex justify-end mt-1">
          <ModeBadge mode={mode} />
        </div>

        {/* Ape-X copy button fixed bottom-left */}
        <div
          className="absolute left-4 bottom-4 z-20"
          style={{ userSelect: 'none' }}
        >
          <button
            onClick={() => handleCopy(content, false)}
            aria-label="Copy Message"
            className={`p-1 transition-colors ${
              copiedApex
                ? copiedIconColor
                : `${baseIconColor} ${hoverIconColor}`
            }`}
          >
            {copiedApex ? <FiCheck size={24} /> : <FiCopy size={24} />}
          </button>
        </div>
      </div>
    );
  }

  // === USER MESSAGE WITH BUBBLE + BUTTONS (3s fade) ===
  return (
    <div
      className={`relative flex my-2 message-bubble-container justify-end opacity-0 ${tailwindAnimation}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        // subtle haptic feedback with slight scale & shadow on tap/hover
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        willChange: 'transform, box-shadow',
      }}
    >
      <div
        className="relative max-w-xl p-5 rounded-lg font-sans text-base cursor-pointer select-text"
        style={{
          fontFamily: 'inherit',
          fontSize: '1rem',
          lineHeight: '1.5rem',
          WebkitFontSmoothing: 'antialiased',
          textRendering: 'optimizeLegibility',
          whiteSpace: 'pre-wrap',
          background:
            'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
          boxShadow:
            '0 4px 15px rgba(59, 130, 246, 0.6), 0 0 12px rgba(139, 92, 246, 0.8), 0 0 18px rgba(236, 72, 153, 0.9)',
          borderRadius: '1rem 1rem 0.25rem 1rem',
          color: 'white',
          userSelect: 'text',
          transformOrigin: 'center bottom',
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = 'scale(0.98)';
          e.currentTarget.style.boxShadow =
            '0 6px 20px rgba(59, 130, 246, 0.9), 0 0 16px rgba(139, 92, 246, 1), 0 0 22px rgba(236, 72, 153, 1)';
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = '';
          e.currentTarget.style.boxShadow =
            '0 4px 15px rgba(59, 130, 246, 0.6), 0 0 12px rgba(139, 92, 246, 0.8), 0 0 18px rgba(236, 72, 153, 0.9)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = '';
          e.currentTarget.style.boxShadow =
            '0 4px 15px rgba(59, 130, 246, 0.6), 0 0 12px rgba(139, 92, 246, 0.8), 0 0 18px rgba(236, 72, 153, 0.9)';
        }}
        onTouchStart={(e) => {
          e.currentTarget.style.transform = 'scale(0.98)';
          e.currentTarget.style.boxShadow =
            '0 6px 20px rgba(59, 130, 246, 0.9), 0 0 16px rgba(139, 92, 246, 1), 0 0 22px rgba(236, 72, 153, 1)';
        }}
        onTouchEnd={(e) => {
          e.currentTarget.style.transform = '';
          e.currentTarget.style.boxShadow =
            '0 4px 15px rgba(59, 130, 246, 0.6), 0 0 12px rgba(139, 92, 246, 0.8), 0 0 18px rgba(236, 72, 153, 0.9)';
        }}
      >
        <EmojioneV4>
          <ReactMarkdown components={renderers}>{content}</ReactMarkdown>
        </EmojioneV4>
      </div>

      {/* User buttons bottom-right, fade after 3 seconds */}
      {showUserButtons && (
        <div className="absolute right-0 -bottom-7 flex space-x-3 z-10 transition-opacity duration-500 opacity-100">
          <button
            onClick={() => onEdit(message)}
            aria-label="Edit Message"
            className={`p-1 ${baseIconColor} ${hoverIconColor} transition-colors`}
          >
            <FiEdit2 size={20} />
          </button>
          <button
            onClick={() => handleCopy(content, true)}
            aria-label="Copy Message"
            className={`p-1 transition-colors ${
              copiedUser
                ? copiedIconColor
                : `${baseIconColor} ${hoverIconColor}`
            }`}
          >
            {copiedUser ? <FiCheck size={20} /> : <FiCopy size={20} />}
          </button>
        </div>
      )}
    </div>
  );
};

export default MessageBubble;


































