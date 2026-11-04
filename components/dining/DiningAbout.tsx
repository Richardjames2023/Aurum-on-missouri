"use client";

import React from 'react';

export const DiningAbout: React.FC = () => {
  return (
    <section className="w-full bg-[#ffffff] py-14 md:py-20 border-b border-gray-100 flex flex-col items-center">
      {/* Container switched to items-center and text-center */}
      <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-16 flex flex-col space-y-6 items-center text-center">
        
        {/* Centered Header Panel Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal font-serif tracking-tight text-[#CAA664] leading-tight">
          Enjoy a Culinary Journey at Aurum During Your Stay in Abuja
        </h2>

        {/* Centered Meta Narrative Body Copy */}
        <div className="max-w-2xl flex flex-col space-y-5 text-stone-900 text-sm font-medium leading-relaxed tracking-wide">
          <p>
            Savour vibrant flavours at our all-day dining venue, The Restaurant at Aurum. Our kitchen crafts a menu that moves easily between Nigerian favourites and international classics, prepared fresh for breakfast, lunch, and dinner.
          </p>
        </div>

      </div>
    </section>
  );
};