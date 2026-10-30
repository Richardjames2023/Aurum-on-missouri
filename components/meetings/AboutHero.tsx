"use client";

import React from 'react';
import Image from "next/image";

export const AboutHero: React.FC = () => {
  return (
    <section className="w-full h-[360px] md:h-[420px] relative overflow-hidden bg-[#343434] select-none flex flex-col items-center justify-center text-center">
      
      {/* Background Hero Asset Window */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/_BOB9008.webp"
          alt="Azusa Luxury Conference Theater Auditorium"
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.05]"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#343434]/40" />
      </div>

      {/* Center Editorial Typography Content */}
      <div className="relative z-10 px-6 max-w-4xl flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#CAA664] font-serif uppercase leading-tight mb-4 drop-shadow-md">
         A Boutique Haven of Luxury Hotel Suites & Apartments
        </h1>
        <div className="w-24 h-[3px] bg-[#CAA664] rounded-full" />
      </div>

    </section>
  );
};
