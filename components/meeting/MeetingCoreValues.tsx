"use client";

import React, { useState } from 'react';

export const MeetingCoreValues: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const youtubeVideoId = "qsNVM6VuM6A"; 

  const coreValues = [
    {
      title: "Personal",
      desc: "We believe in the invincible power of building close personal relationships, enabling us to act as a true partner.",
      image: "/img/A9.webp"
    },
    {
      title: "Professional",
      desc: "We offer our exceptional professional expertise to drive fresh ideas in addition to supporting and guiding our M&E partners with seamless delivery.",
      image: "/img/A7.webp"
    },
    {
      title: "Memorable",
      desc: "We strive to deliver unforgettable meetings and events by crafting positive experiences full of memorable moments to surprise and delight every attendee.",
      image: "/img/BOB6809.webp"
    }
  ];

  const benefits = [
    "Business conferences",
    "Annual general meetings (AGMs)",
    "Board meetings",
    "Product launches",
    "Corporate seminars",
    "Workshops and training sessions",
    "Networking events",
    "Press conferences",
    "Company retreats",
    "Award ceremonies",
    "Public lectures and Academic Seminars",
    "... And More"
  ];

  return (
    <div className="w-full bg-black py-12 px-6 lg:px-12 font-sans flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col space-y-16">
        
        {/* Core Values 3-Column Split */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, idx) => (
            <div key={idx} className="flex flex-col group border border-gray-100 bg-[#FCFBF9] p-5 rounded-2xl shadow-xs transition-shadow hover:shadow-md">
              <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-stone-100 border border-gray-200/40">
                <img src={value.image} alt={value.title} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
              </div>
              <h4 className="text-base font-bold text-[#cba865] tracking-tight mb-2">{value.title}</h4>
              <p className="text-xs md:text-[13px] text-gray-500 font-medium leading-relaxed tracking-wide">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Instant Booking Value Proposition Panel */}
        <div className="w-full bg-[#cba865] p-8 md:p-14 rounded-3xl border border-stone-200/40 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 shadow-sm">
          
          {/* Interactive Video Delivery Engine */}
          <div className="lg:col-span-5 flex items-center justify-center w-full">
            {!isPlaying ? (
              /* Splash Poster View / Play Trigger Button */
              <div 
                onClick={() => setIsPlaying(true)}
                className="w-full aspect-video md:h-64 rounded-2xl relative overflow-hidden bg-stone-900 border border-black/10 flex items-center justify-center cursor-pointer group shadow-lg bg-cover bg-center"
                style={{ backgroundImage: `url('/img/BOB6809.webp')` }}
              >
                {/* Decorative Dark Mask Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                
                {/* Fluid Pulse Animation Control Trigger Button */}
                <div className="w-16 h-16 rounded-full border-2 border-stone-900 flex items-center justify-center text-xl pl-1 shadow-xl bg-white text-stone-950 group-hover:scale-110 group-hover:bg-stone-900 group-hover:text-white group-hover:border-white/20 transition-all duration-300 z-10 select-none">
                  ▶
                </div>
              </div>
            ) : (
              /* Embedded YouTube Iframe Stream Engine */
              <div className="w-full aspect-video md:h-64 rounded-2xl overflow-hidden bg-black shadow-inner border border-black/20">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                  title="Aurum Events Video Showcase"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}
          </div>

          <div className="lg:col-span-7 flex flex-col items-start justify-center">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white font-serif leading-snug mb-5">
              What Events Do We Host? 
            </h3>
            
            {/* Two-Column Grid List Layout Container */}
            <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6 mb-8 text-xs md:text-[13px] font-bold text-gray-600 tracking-wide">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center space-x-2.5">
                  <span className="text-white text-sm shrink-0">✦</span>
                  <span className="text-white">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <button className="border border-stone-900 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#4A0A15] hover:text-white transition-all shadow-xs">
              SEE MORE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};