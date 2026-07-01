"use client";

import React, { useState } from 'react';
import Image from "next/image";
import SubNav from "../SubNav";



export const MeetingHero: React.FC = () => {
    
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
          src="/img/BR-1.jpg"
          alt="Azusa Luxury Conference Theater Auditorium"
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.05]"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10" />
        
        <div className="relative z-20 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-widest text-[#cba865] uppercase font-sans mb-4 leading-tight">
            Searching for a modern meeting or conference facility?
          </h1>
          <p className="text-gray-200 text-base md:text-lg font-medium max-w-2xl mx-auto tracking-wide leading-relaxed">
            Our conference facilities are designed with the privacy, setup, and collaboration to help you accomplish exactly what you came for, whether you're hosting a boardroom presentation, a private meeting, or a work session. 
          </p>
        </div>
      </div>

      {/* Sub Navigation Bar */}
      <SubNav />

    </div>
  );
};
