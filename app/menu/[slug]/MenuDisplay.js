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
      className={`${oswald.className} min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50`}
    >
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Go Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-6 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
        >
          ← Go Back
        </button>

        {/* Product Container */}
        <div className="bg-white/90 backdrop-blur-sm border-2 border-white/50 rounded-3xl shadow-2xl p-8">
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
                <div className="w-full h-full flex items-center justify-center bg-amber-100 text-amber-700 font-bold">
                  No Image
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                {menuData.subCategory ? (
                  <span className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {menuData.subCategory.name}
                  </span>
                ) : null}
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {menuData.name}
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {menuData.description}
              </p>
              <div className="text-3xl font-extrabold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                ₦{menuData.price?.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
