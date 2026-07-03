"use client";

import React, { useRef } from 'react';
import { DiningImageGridItem } from '../../app/types/dining';
import { LuInstagram, LuChevronLeft, LuChevronRight } from 'react-icons/lu';

export const DiningGalleryMap: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const horizontalGallery: DiningImageGridItem[] = [
    { id: "g1", image: "/img/AoM-40.webp", altText: "Vitas Rio Fine Dining Table Arrangement" },
    { id: "g2", image: "/img/AoM-20.webp", altText: "Luxury Restaurant Seating Architecture Layout" },
    { id: "g3", image: "/img/AoM-33.webp", altText: "Premium Drinks Lounge Bar Coordinates" },
    { id: "g4", image: "/img/Aom-15.webp", altText: "Chef Tunde Okoro plating signature cuisine" },
    { id: "g5", image: "/img/Aom-13.webp", altText: "Signature grilled fire steak dish look" },
    { id: "g6", image: "/img/Aom-20.webp", altText: "Luxury Resort Accommodations" }
  ];

  // Hardware-Accelerated Dynamic Scroll Engine
  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstCard = container.firstElementChild as HTMLElement;
      
      if (firstCard) {
        // Dynamically compute exact card width + layout gaps (gap-5 = 20px)
        const cardWidth = firstCard.getBoundingClientRect().width;
        const totalScrollDistance = cardWidth + 20;

        container.scrollBy({
          left: direction === 'left' ? -totalScrollDistance : totalScrollDistance,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="w-full bg-[#FCFBF9] pt-14 flex flex-col items-center">
      <div className="w-full flex flex-col items-center relative">
        
        {/* Structural Viewport Wrapper (Handles Outer Layout Padding) */}
        <div className="w-full px-6 md:px-12 lg:px-16 overflow-hidden">
          {/* 1. Horizontal Image Carousel Slider Track Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-5 w-full mb-12 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {horizontalGallery.map((tile) => (
              <div 
                key={tile.id} 
                className="w-full md:w-[calc((100%-40px)/3)] shrink-0 h-64 relative overflow-hidden bg-stone-200 group shadow-sm border border-gray-200/30 rounded-2xl isolate cursor-pointer"
              >
                <img 
                  src={tile.image} 
                  alt={tile.altText} 
                  className="w-full h-full object-cover object-center transform-gpu scale-100 group-hover:scale-105 transition-all duration-[1000ms] ease-in-out filter brightness-95 group-hover:brightness-90"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Manual Arrow Indicators Pagination Control Station */}
        <div className="w-full px-6 md:px-12 lg:px-16 flex justify-end items-center gap-3 mb-14">
          <button 
            type="button"
            onClick={() => handleScroll('left')}
            className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center text-stone-700 bg-white hover:bg-stone-50 transition-colors cursor-pointer active:scale-95 transform-gpu select-none"
            aria-label="Previous Slide"
          >
            <LuChevronLeft className="w-4 h-4" />
          </button>
          
          <button 
            type="button"
            onClick={() => handleScroll('right')}
            className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center text-stone-700 bg-white hover:bg-stone-50 transition-colors cursor-pointer active:scale-95 transform-gpu select-none"
            aria-label="Next Slide"
          >
            <LuChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 2. Follow Us Social Ribbon Banner */}
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="w-full bg-[#cba865] p-5 text-slate-900 flex items-center justify-between shadow-md rounded-t-xl">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] block pl-2">Follow us on:</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center rounded-xl transition-all mr-2">
              <LuInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3. Static Contact Information Block Title Panel Section */}
        <div className="w-full">
          <div className="w-full bg-black border border-[#DCB286]/30 px-8 py-6 flex flex-col items-start rounded-t-xl text-left">
            <h4 className="text-lg font-bold font-serif text-white tracking-wide mb-1 select-none">Find your way to us </h4>
            <p className="text-xs font-medium text-stone-500 tracking-wide">We are easy to reach, and far more rewarding once you arrive.</p>
          </div>
        </div>

        {/* 4. Full Width Interactive Property Location Map Plate */}
        <div className="w-full h-[400px] relative border-t border-gray-200 bg-stone-100 overflow-hidden shadow-inner flex">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.5756360469372!2d7.477498975799111!3d9.102365890961945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0be759e66c35%3A0x247ead3dd0eff66d!2sAurum%20on%20Missouri!5e0!3m2!1sen!2sng!4v1780225387204!5m2!1sen!2sng"
                className="w-full h-full border-0 filter brightness-[0.98] contrast-[1.02]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aurum Restaurant Location Map - Kado, Abuja"
            />
        </div>

      </div>
    </section>
  );
};