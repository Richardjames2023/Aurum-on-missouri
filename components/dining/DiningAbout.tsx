"use client";

import React from 'react';

export const DiningAbout: React.FC = () => {
  return (
    <section className="w-full bg-[#FCFBF9] py-14 md:py-20 border-b border-gray-100 flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-16 flex flex-col space-y-6 items-start text-left">
        
        {/* Header Panel Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal font-serif tracking-tight text-[#cba865] leading-tight">
          Enjoy A Culinary Journey <br className="hidden md:inline"/>
          at Aurum During Your Stay <br className="hidden md:inline"/>
          in Abuja
        </h2>

        {/* Meta Narrative Body Copy */}
        <div className="max-w-2xl flex flex-col space-y-5 text-stone-900 text-sm font-medium leading-relaxed tracking-wide">
          <p>
            Savor vibrant flavors at the all-day restaurant, Aurumm On Missouri. Our wood-fired cooking creates an unforgettable culinary experience with delightful meat, fish, and veggie dishes prepared to perfection.
          </p>
          {/* <p className="text-gray-400">
            Unwind and appreciate the sophisticated decor and welcoming atmosphere. With ambient live music and calming window views of the surrounding nature, a visit to Aurum On Missouri ensures memorable moments.
          </p> */}
        </div>

      </div>
    </section>
  );
};