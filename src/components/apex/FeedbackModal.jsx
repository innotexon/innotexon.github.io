import React, { useState, useEffect } from 'react';

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const FeedbackModal = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    let timer;
    if (feedback && feedback.includes('Thank')) {
      timer = setTimeout(() => {
        setFeedback(null);
        setMessage('');
        setFile(null);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [feedback]);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (f && (f.type.startsWith('image/') || f.type.startsWith('video/'))) {
      setFile(f);
    } else {
      alert('Only image or video files are allowed.');
      e.target.value = null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() && !file) {
      alert('Please enter a message or upload a file.');
      return;
    }

    setSending(true);
    setFeedback(null);

    const formData = new FormData();
    formData.append('message', message);
    if (file) formData.append('media', file);

    try {
      const res = await fetch('http://localhost:4000/api/feedback', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setFeedback('Thank you for your feedback!');
      } else {
        const errorText = await res.text();
        console.error('Backend error:', errorText);
        setFeedback('Failed to send feedback. Please try again later.');
      }
    } catch (err) {
      console.error('Network error:', err);
      setFeedback('Error sending feedback. Please check your connection.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" aria-modal="true" role="dialog">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 relative shadow-lg">
        <button
          onClick={onClose}
          aria-label="Close feedback modal"
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold"
        >
          <CloseIcon />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-gray-800">Send Feedback</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <textarea
            className="border rounded p-2 resize-none text-gray-800"
            placeholder="Describe the bug or suggest an upgrade..."
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={sending}
          />

          <label className="text-sm text-gray-700 font-medium">
            Upload Image/Video:
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              disabled={sending}
              className="block mt-1 text-sm text-gray-900 file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0
                         file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
            />
          </label>

          {feedback && (
            <p
              className={`text-sm transition-opacity duration-300 ${
                feedback.includes('Thank') ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {feedback}
            </p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="bg-gray-800 text-white py-2 px-6 font-bold transition duration-300 transform
                       hover:scale-105 hover:bg-gray-900 disabled:opacity-50
                       rounded-[50px] clip-path-[polygon(10%_0%,90%_0%,100%_50%,90%_100%,10%_100%,0%_50%)]"
          >
            {sending ? 'Sending...' : 'Send Feedback'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackModal;




