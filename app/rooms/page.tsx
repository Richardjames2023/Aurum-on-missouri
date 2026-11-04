import { Metadata } from 'next';
import RoomsPageClient from './RoomsPageClient';

export const metadata: Metadata = {
  title: 'Rooms and Rates | Aurum on Missouri, Maitama, Abuja',
  description: 'Explore our four room types in Maitama, Abuja from ₦129,000 per night, incl. VAT. Standard, Deluxe, Super Deluxe and Executive rooms.',
  alternates: { canonical: '/rooms' }
};

export default function RoomsPage() {
  return <RoomsPageClient />;
}
