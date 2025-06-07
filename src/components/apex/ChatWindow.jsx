import React, { useState, useCallback, useEffect, useRef } from 'react';
import HeaderBar from './HeaderBar';
import LoadingDots from './LoadingDots';
import MessageBubble from './MessageBubble';
import { APEX_STYLE_MAP } from '../../config/apexConfig';

const ChatWindow = ({
  currentMode,
  onChange,
  messages = [],
  tokensLeft = 0,
  isLoading,
  setInputText,
  setEditMessageId,
}) => {
  const [copiedText, setCopiedText] = useState('');
  const copyTimeoutRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(copyTimeoutRef.current);
  }, []);

  const handleCopy = useCallback((text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedText(text);

    clearTimeout(copyTimeoutRef.current);
    copyTimeoutRef.current = setTimeout(() => {
      setCopiedText('');
    }, 3000);
  }, []);

  const handleEdit = useCallback(
    (message) => {
      if (!message) return;
      setInputText(message.content || '');
      if (setEditMessageId) {
        setEditMessageId(message.id ?? message.timestamp ?? null);
      }
    },
    [setInputText, setEditMessageId]
  );

  const modeConfig = APEX_STYLE_MAP[currentMode];
  const { emptyChatText } = modeConfig || {};

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pb-24 relative flex flex-col gap-4">
      <HeaderBar currentMode={currentMode} />

      {!modeConfig && (
        <div className="text-center mt-20 text-red-500 font-semibold">
          ❌ Unknown mode selected. No active mode profile found.
        </div>
      )}

      {copiedText && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-zinc-900 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-xl animate-fade-in z-50 select-none"
        >
          🔄 Synced with Ape-X: <span className="italic text-sky-400">{copiedText.slice(0, 60)}...</span>
        </div>
      )}

      {modeConfig && messages.length > 0 ? (
        <div className="flex flex-col gap-4 mt-4">
          {messages.map((msg, i) =>
            msg?.content ? (
              <div
                key={msg.id ?? msg.timestamp ?? i}
                className={`flex w-full ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <MessageBubble
                  message={msg}
                  onCopy={handleCopy}
                  onEdit={handleEdit}
                />
              </div>
            ) : (
              <div
                key={`empty-${msg.id ?? msg.timestamp ?? i}`}
                className="text-red-400 text-sm italic px-4 py-2 rounded bg-red-50 border border-red-200"
              >
                ⚠️ Empty message skipped at index {i}
              </div>
            )
          )}

          {isLoading && (
            <div className="flex items-center space-x-3 mt-4">
              <LoadingDots currentMode={currentMode} />
              <span className="italic text-gray-500 select-none">
                Ape-X is contemplating...
              </span>
            </div>
          )}
        </div>
      ) : (
        modeConfig && (
          <div className="text-center mt-16 text-gray-400 italic text-lg" data-aos="fade-in">
            {emptyChatText}
          </div>
        )
      )}
    </section>
  );
};

export default ChatWindow;












