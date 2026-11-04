import { Metadata } from 'next';
import { CorporateFormSection } from '../../components/contact/ContactFormMatrix';
import SubNav from "../../components/SubNav";
import { ContactMap } from '../../components/contact/ContactMap';

export const metadata: Metadata = {
  title: 'Contact Us | Aurum on Missouri, Maitama, Abuja',
  description: 'Call, email or send an enquiry to Aurum on Missouri, 8 Missouri Street, Maitama, Abuja.',
  alternates: { canonical: '/contact' }
};


export default function CorporateContactPage() {

  return (
    <main className="min-h-screen bg-[#ffffff] w-full flex flex-col overflow-x-hidden relative">

      {/* 1. Production Stateful Corporate Form Section Grid Block */}
      <CorporateFormSection />

      {/* Sub Navigation Bar */}
      <SubNav />

      {/* 2. Full-bleed Property Geo Location Mapping Layout Frame */}
      <ContactMap />

    </main>
  );
}
