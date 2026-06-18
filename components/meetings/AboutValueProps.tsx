"use client";

import React from 'react';
import { ValuePropItem } from '../../app/types/meetings';

export const AboutValueProps: React.FC = () => {
  const valuePropsList: ValuePropItem[] = [
    {
      id: "vp-1",
      title: "Premium Culinary Experience",
      description: "Nestled in the tranquil heart of Maitama, Abuja, Aurum on Missouri is a boutique haven where elegance, comfort, and contemporary design come together in perfect harmony.",
      image: "../img/A1.webp"
    },
    {
      id: "vp-2",
      title: "Perfect for Travellers",
      description: "At Aurum, we believe that true hospitality lies in the details, a friendly smile, a perfectly prepared meal, a peaceful night’s rest. Our dedicated team is committed to ensuring your experience is effortless, memorable, and distinctly golden. Aurum on Missouri, where every stay is an experience in understated sophistication.",
      image: "../img/A3.webp"
    },
    {
      id: "vp-3",
      title: "Exceptional Comfort",
      description: "Each space, from our beautifully appointed rooms and apartments to our inviting restaurant, pool, gym, and leisure areas has been thoughtfully curated to reflect a sense of warmth and refined luxury.",
      image: "../img/A2.webp"
    }
  ];

  return (
    <section className="w-full bg-white py-14 md:py-20 border-b border-stone-100 flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-16 flex flex-col items-center max-w-5xl">
        
        {/* Central Proposition Main Subtitle Header */}
        <div className="text-center flex flex-col items-center mb-12 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900 tracking-tight mb-4">
            Why Choose Aurum On Missouri?
          </h2>
          <p className="text-stone-600 text-xs md:text-sm font-medium leading-relaxed tracking-wide">
            At Aurum on Missouri, hospitality is personal. Using our dedication to comfort and bespoke service, we work as a true partner to our corporate and leisure guests, ensuring an effortless, high-end experience from check-in to check-out.
          </p>
        </div>

        {/* 3-Column Proposition Grid Row Tracking Matrix Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {valuePropsList.map((item) => (
            <div key={item.id} className="flex flex-col items-start text-left group">
              {/* Media Block Containment */}
              <div className="w-full h-44 relative overflow-hidden bg-stone-50 rounded-xl border border-gray-100 shadow-xs mb-4">
                <img src={item.image} alt="Aurum On Missouri" className="w-full h-full object-cover" />
              </div>
              {/* Summary Text Content Block */}
              <h3 className="text-stone-700 text-2xl font-semibold leading-relaxed tracking-wide">
                {item.title}
              </h3>
              <p className="text-stone-700 text-xs font-semibold leading-relaxed tracking-wide">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
