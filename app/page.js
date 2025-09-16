"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag, User, MapPin } from "lucide-react";
import Image from "next/image";
import { Oswald } from "next/font/google";
import Menu from "./components/Menu";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/img.jpg",
      title: "ENI'S RESTAURANT & LOUNGE",
      description:
        "Juicy Barbecue Chicken glazed with our signature smoky-sweet BBQ sauce!",
    },
    {
      image: "/img-1.jpg",
      title: "JOLLOF COMBO DEAL",
      description:
        "Enjoy our rich, flavorful Jollof Combo served with the perfect sides!",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=37+Ajose+Street,+Mende,+Maryland",
      "_blank"
    );
  };

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
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23111111' fill-opacity='0.3'%3E%3Cpath d='M20 20.5V18H4v-2h16V4.5L26 12l-6 7.5z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundColor: "rgba(0, 0, 0, 0.95)",
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

      {/* Black banner */}
      <div className="bg-gray-900 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            onClick={handleMapClick}
            className="flex items-center justify-center space-x-2 cursor-pointer"
          >
            <MapPin size={20} className="text-[#673d2b]" />
            <button className="text-white hover:text-[#673d2b] transition-colors">
              37, Ajose street, Mende, Maryland
            </button>
          </div>
        </div>
      </div>

      {/* Content Carousel Section */}
      <section className="bg-black py-8 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Text Content */}
            <div className="max-w-2xl text-center lg:text-left">
              <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8">
                {slides[currentSlide].description}
              </p>

              <button className="bg-[#673d2b] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold hover:bg-[#844628] transition-colors">
                Check our Menu
              </button>
            </div>

            {/* Food image */}
            <div className="relative w-full sm:w-80 h-52 sm:h-72 mt-6 lg:mt-0">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-[#673d2b]" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <Menu />
    </div>
  );
};

export default Home;
