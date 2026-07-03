"use client";

import React, { useState, useEffect } from 'react';
import { LuClock } from 'react-icons/lu';

const CHEF_IMAGES = [
  {
    src: "/img/Aom-15.webp",
    alt: "Chef Tunde Okoro plating signature cuisine",
  },
  {
    src: "/img/Aom-13.webp",
    alt: "Signature grilled fire steak dish look",
  },
];

export const ChefSchedule: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play engine for the slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CHEF_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-black py-14 md:py-20 border-b border-stone-900 flex flex-col items-center text-white">
      <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-16 flex flex-col gap-16">
        
        {/* PART 1: Chef Profile Grid Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Text Summary Info Block */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            <h3 className="text-3xl font-serif font-normal text-[#cba865] tracking-tight leading-tight mb-5">
              Discover Aurum Through <br />
              Chef Tunde Okoro
            </h3>
            <div className="flex flex-col space-y-4 text-stone-300 text-sm font-medium leading-relaxed tracking-wide border-l-2 border-[#cba865] pl-4 max-w-xl">
              <p>
                Indulge in the exceptional flavors of Aurum On Missouri, where Chef Tunde Okoro, mentored by the industry's most esteemed culinary masters, crafts a menu that redefines modern gastronomy.
              </p>
              <p className="italic text-stone-400 font-serif">
                "Each dish is a journey of taste and innovation," says Chef Okoro, promising an unforgettable dining experience in the heart of Abuja.
              </p>
            </div>
          </div>

          {/* Chef Media Asset Slideshow Panel */}
          <div className="lg:col-span-5 order-1 lg:order-2 w-full h-[380px] md:h-[450px] relative overflow-hidden rounded-xl border border-white/10 shadow-xl bg-stone-950 group">
            {CHEF_IMAGES.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[5000ms] ease-out"
                />
              </div>
            ))}

            {/* Pagination Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
              {CHEF_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-5 bg-[#cba865]" : "w-1.5 bg-white/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* PART 2: Opening Hours Information Sheet Card */}
        <div className="w-full flex flex-col items-start text-left">
          <h3 className="text-lg font-bold font-serif text-white tracking-wide mb-5">
            Opening hours
          </h3>
          
          <div className="w-full max-w-2xl bg-stone-900 border border-white/5 p-6 shadow-2xl flex flex-col items-start gap-3 rounded-xl relative overflow-hidden">
            <span className="text-xs font-black uppercase tracking-widest text-[#caa664]">Restaurant</span>
            <div className="flex items-center text-xs font-bold text-stone-200 tracking-wide mt-1">
              <LuClock className="w-4 h-4 text-[#cba865] mr-2.5 flex-shrink-0" />
              <span>Daily 12:00 pm - 12:00 am</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};