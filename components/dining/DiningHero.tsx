"use client";

import React, { useState, useEffect } from 'react';

export const DiningHero: React.FC = () => {
  // Array of images for the slider
  const images = [
    { src: "/img/RESTAURANT-11.webp", alt: "Vitas Rio Dining Atmosphere Experience" },
    { src: "/img/AURUM_-40.webp", alt: "Signature Culinary Delights" },
    { src: "/img/RESTAURANT-2.webp", alt: "Premium Lounge Ambience" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Optional: Auto-play the slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="w-full bg-[#FCFBF9] py-10 md:py-14 border-b border-stone-100 flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column Aspect: Premium Image Carousel Window */}
        <div className="lg:col-span-6 w-full h-[320px] md:h-[420px] relative overflow-hidden bg-stone-100 rounded-2xl shadow-md group isolate">
          
          {/* Images Map with Opacity Fades */}
          {images.map((image, index) => (
            <img 
              key={index}
              src={image.src} 
              alt={image.alt} 
              className={`absolute inset-0 w-full h-full object-cover object-center transform-gpu scale-100 group-hover:scale-102 transition-all duration-[1000ms] ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}

          {/* Navigation Controls */}
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-20 flex justify-between pointer-events-none">
            <button 
              onClick={handlePrev}
              className="w-9 h-9 bg-black/30 backdrop-blur-md rounded-full text-white flex items-center justify-center hover:bg-[#4A0A15] transition-all pointer-events-auto cursor-pointer focus:outline-none text-xl"
            >
              ‹
            </button>
            <button 
              onClick={handleNext}
              className="w-9 h-9 bg-black/30 backdrop-blur-md rounded-full text-white flex items-center justify-center hover:bg-[#4A0A15] transition-all pointer-events-auto cursor-pointer focus:outline-none text-xl"
            >
              ›
            </button>
          </div>

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white w-4" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Column Aspect: Brand Identity Info Typography Sheet */}
        <div className="lg:col-span-6 flex flex-col items-start justify-center text-left lg:pl-6">
          <div className="flex items-center space-x-2 mb-3 select-none">
            <span className="text-xl text-[#4A0A15]">🍽️</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-serif leading-none">
              Aurum Restaurant
            </h1>
          </div>
          
          <div className="flex flex-col space-y-1 text-xs font-bold text-stone-500 uppercase tracking-wider mb-6">
            <span>Type of cuisine: <strong className="text-stone-800">International Cuisine · Local Cuisine · Signature Cuisine </strong></span>
          </div>

          <p className="text-stone-600 text-sm font-medium leading-relaxed tracking-wide mb-8 pl-4 border-l-2 border-stone-200 max-w-xl">
            Taste your way across the map. Explore a curated menu of traditional Nigerian favourites and other rich flavours from around the world.
          </p>

          <button className="bg-[#cba865] hover:bg-slate-900 text-white font-extrabold text-xs tracking-widest uppercase px-10 py-4 shadow-sm transition-all focus:outline-none rounded-none cursor-pointer">
            Explore Our Menus
          </button>
        </div>

      </div>
    </section>
  );
};
