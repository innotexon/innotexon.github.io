import React from 'react';

const TermsModal = ({ isOpen, onAccept, onDecline }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-gray-900 text-white rounded-lg shadow-xl max-w-3xl w-full mx-4 md:mx-0 h-[90vh] overflow-hidden border border-gray-700">
        <div className="p-6 overflow-y-scroll h-full custom-scrollbar">
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Terms & Conditions for Ape-X</h2>
          <p className="mb-2 text-sm text-gray-400">Last Updated: June 6, 2025</p>

          {/* Sections */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">1. Introduction</h3>
            <p>
              Welcome to <strong>Ape-X</strong>, an experimental AI assistant built by <strong>Innotexon Innovations</strong>. By using Ape-X, you agree to these terms. If you disagree, please do not use the service.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">2. Nature of Service</h3>
            <p>
              Ape-X is provided "as is", with no guarantees of accuracy or reliability. It may generate speculative, humorous, or emotionally toned content. You are advised to double-check all outputs before use.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">3. Limitations of Liability</h3>
            <ul className="list-disc ml-5">
              <li>We are not responsible for any consequences arising from Ape-X’s outputs.</li>
              <li>No liability for losses, damages, or emotional responses.</li>
              <li>No uptime guarantees or data accuracy warranties.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">4. Mode-Specific Disclaimers</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Core Mode:</strong> May contain factual errors. Cross-check important data.</li>
              <li><strong>Code Mode:</strong> All code is illustrative. Use with caution in production.</li>
              <li><strong>Research Mode:</strong> Outputs are speculative and non-citable.</li>
              <li><strong>Jester Core:</strong> May include satire, dark humor, or absurd responses. Viewer discretion advised.</li>
              <li><strong>Core (Meta):</strong> Philosophical in nature. May challenge beliefs.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">5. Data & Privacy</h3>
            <p>
              We do not collect personal data or track activity. Feedback sent may be used internally to improve the experience but is stored securely.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">6. Feedback Submission Terms</h3>
            <ul className="list-disc ml-5">
              <li>Do not upload illegal or malicious content.</li>
              <li>Feedback may be used to improve Ape-X but will not be shared or sold.</li>
              <li>Email/IP is not collected unless explicitly provided.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">7. User Conduct</h3>
            <p>
              Users must not exploit, reverse-engineer, or attempt to manipulate Ape-X. Usage should remain ethical and legal.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">8. Content Ownership</h3>
            <p>
              You own your input. We retain rights to generated content. Outputs may be stored temporarily for tuning but not associated with user identity.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">9. Third-Party Dependencies</h3>
            <p>
              We use open-source frontend and browser APIs under respective licenses. We cannot vouch for their continued functionality or safety.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">10. Modification & Termination</h3>
            <p>
              We may update Ape-X or these terms at any time without notice. Continued use signifies agreement to updated terms.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">11. No Guarantee of Fitness</h3>
            <p>
              Ape-X is not suitable for legal, medical, safety, or educational decisions. Do not rely on it in high-risk scenarios.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">12. Acknowledgement</h3>
            <p>
              By clicking “I Accept”, you agree to all the terms outlined and understand that this service is experimental in nature.
            </p>
          </section>

          {/* Buttons */}
          <div className="flex justify-end mt-6 space-x-4">
            <button
              onClick={onDecline}
              className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 transition"
            >
              Exit
            </button>
            <button
              onClick={onAccept}
              className="px-4 py-2 rounded bg-green-600 hover:bg-green-700 transition"
            >
              I Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
