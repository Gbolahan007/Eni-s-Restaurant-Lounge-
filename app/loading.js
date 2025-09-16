"use client";

import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center">
      <div className="relative">
        {/* Main Loading Container */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50">
          <div className="flex flex-col items-center space-y-8">
            {/* Animated Logo/Icon */}
            <div className="relative">
              {/* Outer rotating ring */}
              <div className="w-24 h-24 rounded-full border-4 border-amber-200 animate-spin">
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-amber-600 border-r-orange-600 animate-spin"></div>
              </div>

              {/* Inner pulsing circle */}
              <div className="absolute inset-4 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full animate-pulse flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  {/* Restaurant/Food Icon */}
                  <svg
                    className="w-5 h-5 text-amber-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Loading Text */}
            <div className="text-center space-y-3">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Preparing Your Experience
              </h2>
              <p className="text-gray-600 text-lg">
                Getting everything ready for you...
              </p>
            </div>

            {/* Animated Progress Dots */}
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-bounce"></div>
              <div
                className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>

            {/* Progress Bar */}
            <div className="w-64 h-2 bg-amber-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full opacity-60 animate-ping"></div>
        <div
          className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-40 animate-ping"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/2 -right-6 w-4 h-4 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full opacity-50 animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Background Decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-orange-200/20 to-red-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-amber-100/10 to-orange-100/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
