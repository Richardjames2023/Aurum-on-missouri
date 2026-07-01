import { Metadata } from 'next';
import { CorporateFormSection } from '../../components/contact/ContactFormMatrix';
import SubNav from "../../components/SubNav";
import { ContactMap } from '../../components/contact/ContactMap';

export const metadata: Metadata = {
  title: 'Corporate Enquiries & Events Contact | Azusa Hotels Abuja',
  description: 'Connect with the business accounts and concierge service matrix divisions at Azusa Hotels & Luxury Apartments. Request bulk rates and book events in CBD, Abuja.',
  alternates: { canonical: '/contact' }
};


export default function CorporateContactPage() {

  return (
    <main className="min-h-screen bg-[#FCFBF9] w-full flex flex-col overflow-x-hidden relative">

      {/* 1. Production Stateful Corporate Form Section Grid Block */}
      <CorporateFormSection />

      {/* Sub Navigation Bar */}
      <SubNav />

      {/* 2. Full-bleed Property Geo Location Mapping Layout Frame */}
      <ContactMap />

    </main>
  );
}
