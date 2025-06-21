import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#242424] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-[#242424]  border-2 border-[#3c3b3b] p-10 rounded-lg grid md:grid-cols-2 gap-8">
        {/* Contact Info Card */}
        <div className="bg-[#6c5ce7] p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="mb-6">
              Explore new destinations, indulge in local cuisines, and immerse yourself in diverse cultures.
            </p>
            <div className="space-y-4 text-white text-sm">
              <p>📞 91- **********</p>
              <p>✉️ bhookha.com</p>
              <p>📍 Kolkata, India</p>
            </div>
          </div>
          <div className="mt-6">
            <div className="w-10 h-10 bg-[#4c3dd3] rounded-full flex items-center justify-center rotate-45">
              <div className="w-3 h-3 border-t-4 border-l-4 border-white"></div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Enter your name here..."
              className="p-3 bg-[#1a1a2e] border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Enter your email here..."
              className="p-3 bg-[#1a1a2e] border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Enter your subject here..."
            className="w-full p-3 bg-[#1a1a2e] border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none"
          />
          <textarea
            placeholder="Type here..."
            rows="5"
            className="w-full p-3 bg-[#1a1a2e] border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#6c5ce7] hover:bg-[#5a4cd1] text-white px-6 py-3 rounded-md flex items-center gap-2"
          >
            Send Message
            <svg
              className="w-4 h-4 transform rotate-45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
