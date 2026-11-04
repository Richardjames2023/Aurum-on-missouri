import { Metadata } from 'next';
import { AboutHero } from '@/components/meetings/AboutHero';
import { AboutInstantBooking } from '@/components/meetings/AboutInstantBooking';
import { AboutValueProps } from '@/components/meetings/AboutValueProps';
import SubNav from '@/components/SubNav';

export const metadata: Metadata = {
  title: 'About Us | Aurum on Missouri, Maitama, Abuja',
  description: 'A boutique luxury hotel at 8 Missouri Street, Maitama, Abuja. Four room types, an all-day restaurant and a private conference room.',
  alternates: { canonical: '/about' }
};

export default function MeetingsEventsPage() {
        
  return (
    <main className="min-h-screen bg-white w-full flex flex-col overflow-x-hidden relative">
      

      {/* 1. Immersive Theater Hall Hero Overlay Banner */}
      <AboutHero />

      {/* Sub Navigation Bar */}
      <SubNav />

      {/* 5. 3-Column Granular Proposition Feature Matrix Grid */}
      <AboutValueProps />

      {/* 4. Videography Checklist Feature Value Block Section */}
      <AboutInstantBooking />

      {/* 6. Lower News Categories Segment Strip */}
      {/* <AboutNews /> */}

    </main>
  );
}
