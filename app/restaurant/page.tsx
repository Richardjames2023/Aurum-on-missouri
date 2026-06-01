// app/restaurant/page.tsx
"use client";

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DiningHero } from '@/components/dining/DiningHero';
import { DiningSubNav } from '@/components/dining/DiningSubNav';
import { DiningAbout } from '@/components/dining/DiningAbout';
import { ChefSchedule } from '@/components/dining/ChefSchedule';
import { DiningGalleryMap } from '@/components/dining/DiningGalleryMap';
import SubNav, { SubNavItem } from '@/components/SubNav';

export default function RestaurantPage() {
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
  return (
    <main className="min-h-screen bg-white w-full flex flex-col overflow-x-hidden relative">
      
      {/* GLOBAL TOP NAVIGATION APP HEADER */}
      <Header />

      {/* Main Culinary Showcase Hero Banner */}
      <DiningHero />

      {/* Interactive Middle Filter Tab Bar */}
      {/* <DiningSubNav /> */}

      {/* Sub Navigation Bar */}
      <SubNav items={subnavItems} ctaText="Book" />

      {/* Narrative Copy Segment Description */}
      <DiningAbout />

      {/* Chef Information Profiler & Schedules Section */}
      <ChefSchedule />

      {/* Lower Gallery Strip, Instagram Ribbon, and Abuja Location Map */}
      <DiningGalleryMap />

      {/* GLOBAL BOTTOM STICKY REVENUE NAVFOOTER */}
      <Footer />

    </main>
  );
}
