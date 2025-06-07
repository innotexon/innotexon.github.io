// src/components/TermsConsentModal.jsx
import React, { useEffect, useState } from 'react';

const TermsConsentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // Detect incognito + first visit
  useEffect(() => {
    const accepted = localStorage.getItem('termsAccepted');

    const detectIncognito = async () => {
      const fs = window.RequestFileSystem || window.webkitRequestFileSystem;
      if (!fs) return false;

      return new Promise((resolve) => {
        fs(window.TEMPORARY, 100, () => resolve(false), () => resolve(true));
      });
    };

    const initConsent = async () => {
      const isIncognito = await detectIncognito();
      if (!accepted || isIncognito) {
        setIsOpen(true);
      }
    };

    initConsent();
  }, []);

  const handleAccept = () => {
    if (isChecked) {
      localStorage.setItem('termsAccepted', 'true');
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-xl max-w-lg w-full shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Terms & Privacy Policy</h2>
        <p className="mb-4 text-sm text-gray-700">
          By accessing this site, you agree to our{' '}
          <a
            href="/legal/terms-and-conditions.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Terms & Conditions
          </a>{' '}
          and{' '}
          <a
            href="/legal/privacy-policy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Privacy Policy
          </a>. You are not allowed to replicate, modify, or redistribute any ideas without written permission.
        </p>
        <label className="flex items-center mb-4 text-sm text-gray-800">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="mr-2"
          />
          I have read and agree to the Terms & Privacy Policy
        </label>
        <button
          onClick={handleAccept}
          disabled={!isChecked}
          className={`w-full py-2 rounded-lg text-white ${
            isChecked ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Enter Innotexon
        </button>
      </div>
    </div>
  );
};

export default TermsConsentModal;
