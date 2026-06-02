"use client";

import React, { useState } from 'react';
import Image from "next/image";
import SubNav, { SubNavItem } from "../SubNav";



export const MeetingHero: React.FC = () => {
    const subnavItems: SubNavItem[] = [
      { label: "Overview", href: "#", active: false },
      { label: "Rooms", href: "#", active: true },
      { label: "Services", href: "#", active: false },
      { label: "Dining", href: "#", active: false },
      { label: "Meetings & Events", href: "#", active: false },
      { label: "Activities", href: "#", active: false },
      { label: "Fitness & Wellness", href: "#", active: false },
      { label: "Deals", href: "#", active: false },
      { label: "Reviews", href: "#", active: false },
      { label: "Nearby Attractions", href: "#", active: false },
      { label: "Contact", href: "#", active: false },
    ];
  const [activeTab, setActiveTab] = useState('Overview');
  const subCategories = [
    'Overview', 'Book it easy', 'Industry Solutions', 
    'Popular Event Destinations', 'Azusa Rewards for Bookers and Planners', 
    'Food & Beverage', 'Event Type'
  ];

  return (
    <div className="w-full font-sans">
      
      {/* Visual Canvas Block */}
      <div className="w-full h-[560px] relative flex flex-col justify-center items-center px-6 text-center overflow-hidden bg-stone-900">
        <Image
          src="/img/RESTAURANT-2.webp"
          alt="Azusa Luxury Conference Theater Auditorium"
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.05]"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10" />
        
        <div className="relative z-20 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-widest text-[#cba865] uppercase font-sans mb-4 leading-tight">
            BUILT FOR WORK, DESIGNED FOR CONNECTION.
          </h1>
          <p className="text-gray-200 text-base md:text-lg font-medium max-w-2xl mx-auto tracking-wide leading-relaxed">
            Aurum On Missouri provides a complete environment for businesses who value structure, privacy, and professionalism.
          </p>
        </div>
      </div>

      {/* Sub Navigation Bar */}
      <SubNav items={subnavItems} ctaText="Book" />

    </div>
  );
};
