"use client";

import React from "react";
import SubNav from "@/components/SubNav";

export const ExploreHero: React.FC = () => {
  const tabs = [
    "Overview",
    "Rooms",
    "Services",
    "Dining",
    "Meetings & Events",
    "Activities",
    "Fitness & Wellness",
    "Deals",
    "Reviews",
    "Nearby attractions",
    "Contact",
  ];


  return (
    <div className="w-full bg-[#FCFBF9] font-sans flex flex-col items-center">
      {/* Mosaic Hero Grid layout block */}
      <div className="w-full max-w-[1440px] px-6 py-12 md:py-16 mb-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Aspect Side: Architectural Picture Grid Mosaic */}
        <div className="lg:col-span-7 grid grid-cols-12 gap-4 h-[440px]">
          {/* Main Portrait Frame Panel */}
          <div className="col-span-6 h-full rounded-2xl overflow-hidden shadow-md group relative border border-stone-200/40">
            <img
              src="/img/explore2.webp"
              alt="Boutique Shopping"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
            />
          </div>

          {/* Stacked Right Column Panels */}
          <div className="col-span-6 flex flex-col gap-4 h-full">
            <div className="h-1/2 rounded-2xl overflow-hidden shadow-md group relative border border-stone-200/40">
              <img
                src="/img/explore1.webp"
                alt="Varuna Lounge Vibe"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="h-1/2 rounded-2xl overflow-hidden shadow-md group relative border border-stone-200/40">
              <img
                src="/img/farmcityabj.webp"
                alt="Fine Dining Vitas Rio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Right Aspect Side: Editorial Branding Statement Panel */}
        <div className="lg:col-span-5 flex flex-col items-start justify-center lg:pl-6">
          <span className="text-[11px] font-extrabold text-slate-800 tracking-[0.25em] uppercase block mb-3">
            Nearby Locations
          </span>
          <h1 className="text-3xl md:text-5xl font-normal tracking-tight text-[#cba865] font-serif leading-tight mb-5">
            Explore the beautiful <br />
            city of Abuja
          </h1>
          <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed tracking-wide max-w-md">
            From the elegant Farm City to the vibrant,
            bustling vibes of Varuna and African & Intercontinental Air Port at
            Lugbe, explore everything this dynamic city has to offer from
            the sophisticated comfort of Aurum On Missouri.
          </p>
        </div>
      </div>

      {/* Sub Navigation Bar */}
      <SubNav  />

    </div>
  );
};
