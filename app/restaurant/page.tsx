// app/restaurant/page.tsx
"use client";

import React from 'react';
import { DiningHero } from '@/components/dining/DiningHero';
import { DiningSubNav } from '@/components/dining/DiningSubNav';
import { DiningAbout } from '@/components/dining/DiningAbout';
import { ChefSchedule } from '@/components/dining/ChefSchedule';
import { DiningGalleryMap } from '@/components/dining/DiningGalleryMap';
import SubNav from '@/components/SubNav';

export default function RestaurantPage() {
   
  return (
    <main className="min-h-screen bg-white w-full flex flex-col overflow-x-hidden relative">

      {/* Main Culinary Showcase Hero Banner */}
      <DiningHero />

      {/* Interactive Middle Filter Tab Bar */}
      {/* <DiningSubNav /> */}

      {/* Sub Navigation Bar */}
      <SubNav />

      {/* Narrative Copy Segment Description */}
      <DiningAbout />

      {/* Chef Information Profiler & Schedules Section */}
      <ChefSchedule />

      {/* Lower Gallery Strip, Instagram Ribbon, and Abuja Location Map */}
      <DiningGalleryMap />

    </main>
  );
}
