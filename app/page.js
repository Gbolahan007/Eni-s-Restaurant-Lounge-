import { Suspense } from "react";
import Image from "next/image";
import { Oswald } from "next/font/google";
import {
  getCategories,
  getSubCategories,
  getMenuItems,
} from "./_lib/data-server";
import { ShoppingBag, User, MapPin } from "lucide-react";
import HeroSlideshow from "./components/HeroSlideShow";
import StaticMenu from "./components/Menu";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

async function fetchMenuData() {
  try {
    const [categories, subCategories, menuItems] = await Promise.all([
      getCategories(),
      getSubCategories(),
      getMenuItems(),
    ]);
    return {
      categories,
      subCategories,
      menuItems,
    };
  } catch (error) {
    console.error("Failed to fetch menu data:", error);
    return {
      categories: [],
      subCategories: [],
      menuItems: [],
    };
  }
}

export default async function Home() {
  const initialMenuData = await fetchMenuData();

  return (
    <div
      className={`${oswald.className} min-h-screen bg-black`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23111111' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundColor: "#0a0a0a",
      }}
    >
      {/* Header */}
      <header
        className="bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-800 py-2"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23111111' fill-opacity='0.3'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundColor: "#0a0a0a",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo-1.png"
                alt="Eni's Restaurant Logo"
                width={120}
                height={40}
                priority
                className="filter-none drop-shadow-2xl brightness-0 invert"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-[#673d2b] font-semibold border-b-2 border-[#673d2b] pb-1"
              >
                Menu
              </a>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-300 hover:text-[#673d2b] transition-colors">
                <User size={24} />
              </button>
              <button className="p-2 text-gray-300 hover:text-[#673d2b] transition-colors relative">
                <ShoppingBag size={24} />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#673d2b] rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">0</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Black banner with location */}
      <LocationBanner />

      {/* Hero section with slideshow */}
      <HeroSlideshow />

      <Suspense fallback={<MenuSkeleton />}>
        <StaticMenu initialData={initialMenuData} />
      </Suspense>
    </div>
  );
}

function LocationBanner() {
  return (
    <div className="bg-gray-900 text-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-2">
          <MapPin size={20} className="text-[#673d2b]" />
          <a
            href="https://www.google.com/maps/search/?api=1&query=37+Ajose+Street,+Mende,+Maryland"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#673d2b] transition-colors"
          >
            37, Ajose street, Mende, Maryland
          </a>
        </div>
      </div>
    </div>
  );
}

// Loading skeleton
function MenuSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-24 h-10 bg-gray-800 rounded-full animate-pulse"
          />
        ))}
      </div>
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-gray-800 rounded-3xl p-6 animate-pulse">
            <div className="h-6 bg-gray-700 rounded mb-2" />
            <div className="h-4 bg-gray-700 rounded mb-4" />
            <div className="h-8 bg-gray-700 rounded w-24" />
          </div>
        ))}
      </div>
    </div>
  );
}

export const revalidate = 3600; // 1 hour
