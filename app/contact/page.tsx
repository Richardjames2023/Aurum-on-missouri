import { Metadata } from 'next';
import { CorporateFormSection } from '../../components/contact/ContactFormMatrix';
import SubNav, { SubNavItem } from "../../components/SubNav";
import { ContactMap } from '../../components/contact/ContactMap';

export const metadata: Metadata = {
  title: 'Corporate Enquiries & Events Contact | Azusa Hotels Abuja',
  description: 'Connect with the business accounts and concierge service matrix divisions at Azusa Hotels & Luxury Apartments. Request bulk rates and book events in CBD, Abuja.',
  alternates: { canonical: '/contact' }
};


export default function CorporateContactPage() {
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
    <main className="min-h-screen bg-[#FCFBF9] w-full flex flex-col overflow-x-hidden relative">

      {/* 1. Production Stateful Corporate Form Section Grid Block */}
      <CorporateFormSection />

      {/* Sub Navigation Bar */}
      <SubNav items={subnavItems} ctaText="Book" />

      {/* 2. Full-bleed Property Geo Location Mapping Layout Frame */}
      <ContactMap />

    </main>
  );
}
