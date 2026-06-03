import { PopularDestinations } from "../components/PopularDestinations";
import { BrandShowcase } from "../components/BrandShowcase";
import {RoomShowcaseMatrix}from "../components/RoomShowcaseMatrix";
import { Suspense } from "react";
import { FacilitiesShowcase } from "../components/FacilitiesShowcase";
import BankBenefitSection  from "../components/BankBenefitSection";
import HeroSectionTwo from "@/components/HeroSectionTwo";

// types/index.ts
export interface NavItem {
  label: string;
  href: string;
  isBadge?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export default function HomePage() {
  return (
    <main>
      <HeroSectionTwo />
      <PopularDestinations />
          <Suspense fallback={<div className="h-40 bg-stone-900 animate-pulse" />}>
      <RoomShowcaseMatrix />
      </Suspense>
      <FacilitiesShowcase/>
      <BankBenefitSection />
    </main>
  );
}
