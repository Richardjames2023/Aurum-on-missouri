"use client";

import React, { useState } from 'react';
import Image from "next/image";
import SubNav from "../SubNav";



export const MeetingHero: React.FC = () => {
    
  const [activeTab, setActiveTab] = useState('Overview');
  const subCategories = [
    'Overview', 'Book it easy', 'Industry Solutions', 
    'Popular Event Destinations', 'Aurum Rewards for Bookers and Planners', 
    'Food & Beverage', 'Event Type'
  ];

  return (
    <div className="w-full font-sans">
      
      {/* Visual Canvas Block */}
      <div className="w-full h-[560px] relative flex flex-col justify-center items-center px-6 text-center overflow-hidden bg-[#343434]">
        <Image
          src="/img/BR-1.jpg"
          alt="Conference room, Aurum on Missouri"
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.05]"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10" />
        
        <div className="relative z-20 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-widest text-[#CAA664] uppercase font-sans mb-4 leading-tight">
            Searching for a modern meeting or conference facility?
          </h1>
          <p className="text-stone-300 text-base md:text-lg font-medium max-w-2xl mx-auto tracking-wide leading-relaxed mb-6">
            Our conference facilities are designed to give you the privacy, setup and support to get things done.
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2.5 text-xs md:text-sm font-semibold text-white tracking-wide">
            Seats up to 20 in boardroom style | High-speed Wi-Fi | 84-inch smart LED screen | Private café lounge
          </div>
        </div>
      </div>

      {/* Sub Navigation Bar */}
      <SubNav />

    </div>
  );
};
