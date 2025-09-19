"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const HeroSlideshow = () => {
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

  return (
    <section
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23111111' fill-opacity='0.3'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundColor: "#0a0a0a",
      }}
      className="bg-black py-8 sm:py-16 relative"
    >
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
  );
};

export default HeroSlideshow;
