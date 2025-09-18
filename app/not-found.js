"use client";

import { useRouter } from "next/navigation";
import { ChefHat, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23111111' fill-opacity='0.3'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundColor: "#0a0a0a",
      }}
    >
      <div className="max-w-md w-full">
        {/* Main Card */}
        <div className="bg-black/80 border-2 border-gray-800 rounded-3xl shadow-2xl p-8 text-center">
          {/* Icon */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#673d2b]/20 rounded-full">
              <ChefHat className="w-10 h-10 text-[#673d2b]" />
            </div>
          </div>

          {/* Error Code */}
          <div className="mb-4">
            <span className="inline-block bg-[#673d2b]/20 text-[#e0c9c0] px-4 py-2 rounded-full text-sm font-semibold">
              404 - Not Found
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-white mb-4">
            Menu Item Not Found
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Sorry, we couldn&apos;t find the menu item you&apos;re looking for.
            It might have been removed or the link is incorrect.
          </p>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => router.back()}
              className="w-full px-6 py-3 bg-[#673d2b] text-white rounded-lg hover:bg-[#3b241a] transition-colors duration-200 flex items-center justify-center gap-2 font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>

            <button
              onClick={() => router.push("/")}
              className="w-full px-6 py-3 bg-gradient-to-r from-[#673d2b] to-[#3b241a] text-white rounded-lg hover:from-[#844628] hover:to-[#4a2b1d] transition-all duration-200 flex items-center justify-center gap-2 font-semibold"
            >
              <Home className="w-5 h-5" />
              Return Home
            </button>
          </div>
        </div>

        {/* Additional Help Text */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Looking for something specific? Try browsing our{" "}
            <button
              onClick={() => router.push("/")}
              className="text-[#e0c9c0] hover:text-[#673d2b] font-semibold underline"
            >
              full menu
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
