import React, { useState } from 'react';

const DeleteAccount = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 3500); // 3.5 seconds loading
  };

  return (
    <div className="bg-[#1E2931] text-white font-sans min-h-screen">
      <div className="max-w-7xl mx-auto p-6 md:p-12">
        {/* Top Section: Side-by-side image and heading */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Left Image */}


          {/* Right Heading */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Delete Account
            </h1>
            <p className="text-gray-200 text-base leading-relaxed">
              Submit your email address below to request the deletion of your account. We’ll process your request promptly and securely.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <section className="bg-[#2A3744] p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">Account Deletion Request</h2>
          {isSubmitted ? (
            <div className="text-center">
              <p className="text-xl text-green-400 font-medium">ACCOUNT HAS BEEN DELETED</p>
              <p className="text-gray-300 mt-2">Your request has been processed successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-gray-200 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 rounded-lg bg-[#3A4653] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 rounded-lg font-medium text-white transition duration-200 ${
                  isLoading
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
                      />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Submit Request'
                )}
              </button>
            </form>
          )}
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-400 text-sm border-t border-gray-700 mt-12 pt-6">
          © 2025 Itworked Systems. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default DeleteAccount;