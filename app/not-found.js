"use client";
import { useRouter } from "next/navigation";
import { ChefHat, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Main Card */}
        <div className="bg-white/90 backdrop-blur-sm border-2 border-white/50 rounded-3xl shadow-2xl p-8 text-center">
          {/* Icon */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full">
              <ChefHat className="w-10 h-10 text-amber-600" />
            </div>
          </div>

          {/* Error Code */}
          <div className="mb-4">
            <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
              404 - Not Found
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Menu Item Not Found
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Sorry, we couldn&apos;t find the menu item you&apos;re looking for.
            It might have been removed or the link is incorrect.
          </p>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => router.back()}
              className="w-full px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-200 flex items-center justify-center gap-2 font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>

            <button
              onClick={() => router.push("/")}
              className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center justify-center gap-2 font-semibold"
            >
              <Home className="w-5 h-5" />
              Return Home
            </button>
          </div>
        </div>

        {/* Additional Help Text */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Looking for something specific? Try browsing our{" "}
            <button
              onClick={() => router.push("/menu")}
              className="text-amber-600 hover:text-amber-700 font-semibold underline"
            >
              full menu
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
