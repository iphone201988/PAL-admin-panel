import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#1E2931] text-white font-sans min-h-screen">
      <div className="max-w-7xl mx-auto p-6 md:p-12">
        {/* Top Section: Side-by-side image and heading */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Left Image */}
         

          {/* Right Heading */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-lg mb-2">
              Effective Date: <strong>01.04.2025</strong>
            </p>
            <p className="text-gray-300 text-lg mb-4">
              Last Updated: <strong>01.06.2025</strong>
            </p>
          </div>
        </div>

        {/* Policy Content */}
        <div className="text-gray-200 space-y-10">
          {/* Section 1 */}
          <section className="bg-[#2A3744] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-white mb-3">1. Information We Collect</h2>
            <p className="leading-relaxed">We collect the following types of information:</p>
            <ul className="list-disc list-inside mt-3 space-y-3">
              <li>
                <strong>User-Provided Information</strong>
                <ul className="list-circle list-inside pl-6 space-y-2 mt-2">
                  <li>Name or nickname</li>
                  <li>Contact preferences</li>
                  <li>Custom AI contact descriptions</li>
                  <li>Profile pictures (optional)</li>
                  <li>Conversations with AI contacts</li>
                </ul>
              </li>
              <li>
                <strong>Usage Information</strong>
                <ul className="list-circle list-inside pl-6 space-y-2 mt-2">
                  <li>How often you use the app</li>
                  <li>Which features you interact with</li>
                  <li>Device type, operating system, and app version</li>
                </ul>
              </li>
              <li>
                <strong>Optional Media</strong>
                <ul className="list-circle list-inside pl-6 space-y-2 mt-2">
                  <li>Images you upload or share in chats</li>
                </ul>
              </li>
            </ul>
            <p className="mt-4 italic">We do not access your contacts, phone number, or external messages.</p>
          </section>

          {/* Section 2 */}
          <section className="bg-[#2A3744] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Generate personalized AI responses</li>
              <li>Send messages from AI contacts</li>
              <li>Improve app experience and functionality</li>
              <li>Monitor usage trends and app performance</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-[#2A3744] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-white mb-3">3. Data Sharing & Storage</h2>
            <p className="leading-relaxed">
              We do not sell or rent your personal data. We may share anonymized data with third-party AI providers
              (e.g., OpenAI) to process your messages.
            </p>
            <p className="mt-2 leading-relaxed">
              All messages are transmitted securely and may be temporarily stored to support chat history.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-[#2A3744] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-white mb-3">4. Third-Party Services</h2>
            <p className="leading-relaxed">This app uses external AI services, including but not limited to:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>OpenAI (for AI-generated content)</li>
              <li>Cloud infrastructure providers (e.g., AWS, Firebase, Supabase)</li>
            </ul>
            <p className="mt-3 leading-relaxed">
              These providers may temporarily receive message content to generate responses or deliver app features.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-[#2A3744] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-white mb-3">5. Your Rights</h2>
            <p className="leading-relaxed">Depending on your region, you may have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Access or correct your data</li>
              <li>Delete your account and associated data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="bg-[#2A3744] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-white mb-3">6. Children’s Privacy</h2>
            <p className="leading-relaxed">
              This app is not intended for users under 13. If you’re under the age of 13, please do not use the app.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-[#2A3744] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-white mb-3">7. Contact Us</h2>
            <p className="leading-relaxed">
              For any questions about this Privacy Policy, contact us at:
            </p>
            <p className="text-blue-400 font-medium mt-2 hover:underline">
              📧 <a href="mailto:info@vircle.ai">info@pal.ai</a>
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-400 text-sm border-t border-gray-700 mt-12 pt-6">
          © 2025 auratherapy Systems. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;