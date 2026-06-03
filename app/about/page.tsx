import { Metadata } from 'next';
import { AboutHero } from '@/components/meetings/AboutHero';
import { AboutInstantBooking } from '@/components/meetings/AboutInstantBooking';
import { AboutValueProps } from '@/components/meetings/AboutValueProps';
import SubNav, { SubNavItem } from '@/components/SubNav';

export const metadata: Metadata = {
  title: 'Luxury Meeting Rooms & Event Venues Booking | Azusa Hotels Abuja',
  description: 'Host premium corporate summits, luxury weddings, or private board meetings in our state-of-the-art conference halls in Kado, Abuja. Experience flexible planning solutions.',
  alternates: { canonical: '/meetings-events' }
};

export default function MeetingsEventsPage() {
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
      

      {/* 1. Immersive Theater Hall Hero Overlay Banner */}
      <AboutHero />

      {/* Sub Navigation Bar */}
      <SubNav items={subnavItems} ctaText="Book" />

      {/* 5. 3-Column Granular Proposition Feature Matrix Grid */}
      <AboutValueProps />

      {/* 4. Videography Checklist Feature Value Block Section */}
      <AboutInstantBooking />

      {/* 6. Lower News Categories Segment Strip */}
      {/* <AboutNews /> */}

    </main>
  );
}
