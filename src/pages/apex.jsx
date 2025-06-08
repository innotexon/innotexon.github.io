import React, { useState, useEffect, useRef, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ChatWindow from '../components/apex/ChatWindow';
import ModeSelector from '../components/apex/ModeSelector';
import InputBox from '../components/apex/InputBox';
import VerticalTokenBar from '../components/apex/VerticalTokenBar';
import { APEX_STYLE_MAP, TOKEN_LIMIT } from '../config/apexConfig';
import { fetchApeXResponse } from '../services/apexApi';

import TermsModal from '../components/TermsModal';
import FeedbackModal from '../components/apex/FeedbackModal';

const Apex = () => {
  const [currentMode, onChange] = useState('primordialClarity');
  const [userInput, setUserInput] = useState('');
  const [tokensUsed, setTokensUsed] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [editMessageId, setEditMessageId] = useState(null);
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const tokensLeft = Math.max(TOKEN_LIMIT - tokensUsed, 0);
  const isSending = useRef(false);
  const latestMessages = useRef([]);
  const chatContainerRef = useRef(null);

  const modeStyles = APEX_STYLE_MAP[currentMode];

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-in-out' });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [currentMode]);

  useEffect(() => {
    latestMessages.current = messages;
    const scrollTimeout = setTimeout(() => {
      scrollToBottom();
    }, 50);
    return () => clearTimeout(scrollTimeout);
  }, [messages]);

  useEffect(() => {
    const accepted = localStorage.getItem('apex_tnc_agreed');
    if (accepted === 'true') {
      setHasAcceptedTerms(true);
    }
  }, []);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const handleAcceptTerms = () => {
    localStorage.setItem('apex_tnc_agreed', 'true');
    setHasAcceptedTerms(true);
  };

  const handleDeclineTerms = () => {
    alert('You must accept the Terms & Conditions to use Ape-X.');
  };

  const handleInputChange = (e) => setUserInput(e.target.value);

  const handleSend = useCallback(async () => {
    const input = userInput.trim();
    if (!input || isSending.current || isLoading || tokensUsed >= TOKEN_LIMIT) return;

    isSending.current = true;
    setIsLoading(true);

    let updatedMessages;

    if (editMessageId) {
      updatedMessages = latestMessages.current.map((msg) =>
        msg.id === editMessageId ? { ...msg, content: input, timestamp: new Date().toISOString() } : msg
      );
    } else {
      const userMessage = {
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        role: 'user',
        content: input,
        mode: currentMode,
        timestamp: new Date().toISOString(),
      };
      updatedMessages = [...latestMessages.current, userMessage];
    }

    setMessages(updatedMessages);
    latestMessages.current = updatedMessages;
    setUserInput('');
    setEditMessageId(null);

    try {
      const response = await fetchApeXResponse(updatedMessages, currentMode);

      // ✅ FIXED: Proper Gemini Flash 2.0 parsing
      const rawText = response?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
      const silent = rawText?.toLowerCase().includes('silent');
      const invalid = !rawText || silent;

      const botMessage = {
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        role: 'assistant',
        content: invalid
          ? '⚠️ The Sacred One is momentarily silent. Please try again.'
          : rawText,
        mode: currentMode,
        timestamp: new Date().toISOString(),
      };

      const newMessages = [...latestMessages.current, botMessage];
      setMessages(newMessages);
      latestMessages.current = newMessages;

      if (!invalid) {
        setTokensUsed((prev) => Math.min(prev + 1, TOKEN_LIMIT));
      }
    } catch (error) {
      console.error('Error fetching Ape-X response:', error);
      const errorMessage = {
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        role: 'assistant',
        content: '⚠️ Error fetching Ape-X response. Please check your connection or try again later.',
        mode: currentMode,
        timestamp: new Date().toISOString(),
      };

      const newMessages = [...latestMessages.current, errorMessage];
      setMessages(newMessages);
      latestMessages.current = newMessages;
    } finally {
      setIsLoading(false);
      isSending.current = false;
      setTimeout(scrollToBottom, 100);
    }
  }, [userInput, isLoading, tokensUsed, currentMode, editMessageId]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!hasAcceptedTerms) {
    return (
      <TermsModal
        isOpen={true}
        onAccept={handleAcceptTerms}
        onDecline={handleDeclineTerms}
      />
    );
  }

  return (
    <div className={`flex flex-col min-h-screen w-full ${modeStyles.theme} transition-all duration-700 ease-in-out`}>
      <VerticalTokenBar tokensLeft={tokensLeft} />

      <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-md border-b border-white/10">
        <ModeSelector currentMode={currentMode} onChange={onChange} />
      </header>

      <main
        ref={chatContainerRef}
        className="flex-grow overflow-y-auto px-4 md:px-6 pb-36 pt-28"
      >
        <ChatWindow
          key={`${currentMode}-${messages.length}`}
          messages={messages}
          currentMode={currentMode}
          onChange={onChange}
          isLoading={isLoading}
          setInputText={setUserInput}
          setEditMessageId={setEditMessageId}
        />
      </main>

      <footer className="fixed bottom-0 left-0 w-full px-4 md:px-6 pb-4 z-30">
        <InputBox
          key={currentMode}
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onSend={handleSend}
          disabled={isLoading || tokensUsed >= TOKEN_LIMIT}
          mode={currentMode}
        />
      </footer>

      {/* Feedback Button */}
      <button
        aria-label="Open Feedback Form"
        onClick={() => setIsFeedbackOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 shadow-lg flex items-center justify-center text-white hover:brightness-110 transition"
        title="Send Feedback"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </button>

      {/* Feedback Modal */}
      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />

      {tokensUsed >= TOKEN_LIMIT && (
        <div
          className="fixed bottom-[5rem] w-full text-center text-red-400 font-medium select-none"
          data-aos="fade-in"
          role="alert"
          aria-live="assertive"
        >
          Your sacred token limit has reached the end of this cycle.
        </div>
      )}
    </div>
  );
};

export default Apex;


















// This code is a React component for the Apex page, which includes a chat interface with various modes and token tracking.



