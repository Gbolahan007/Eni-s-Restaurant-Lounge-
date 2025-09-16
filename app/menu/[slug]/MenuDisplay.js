"use client";

import { Oswald } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function MenuDisplay({ menuData }) {
  const router = useRouter();

  return (
    <div
      className={`${oswald.className} min-h-screen`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23111111' fill-opacity='0.3'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundColor: "#0a0a0a",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Go Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-6 px-4 py-2 bg-[#673d2b] text-white rounded-lg hover:bg-[#3b241a] transition"
        >
          ← Go Back
        </button>

        {/* Product Container */}
        <div className="bg-black/80 border-2 border-gray-800 rounded-3xl shadow-2xl p-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Product Image */}
            <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              {menuData.image ? (
                <Image
                  src={menuData.image}
                  alt={menuData.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#673d2b]/20 text-[#673d2b] font-bold">
                  No Image
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                {menuData.subCategory ? (
                  <span className="inline-block bg-[#673d2b]/20 text-[#e0c9c0] px-3 py-1 rounded-full text-sm font-semibold">
                    {menuData.subCategory.name}
                  </span>
                ) : null}
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">
                {menuData.name}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {menuData.description}
              </p>
              <div className="text-3xl font-extrabold text-[#673d2b]">
                ₦{menuData.price?.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
