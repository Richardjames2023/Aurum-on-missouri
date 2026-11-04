import { Metadata } from 'next';
import { RegistrationThankYou } from '@/components/auth/RegistrationThankYou';

export const metadata: Metadata = {
  title: 'Welcome to Aurum Elite | Aurum on Missouri, Maitama, Abuja',
  description: 'Your Aurum Elite membership account creation has been confirmed at Aurum on Missouri, Maitama, Abuja.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/registration-success' }
};

export default function RegistrationSuccessPage() {
  return (
    <main className="w-full min-h-screen bg-[#ffffff] flex flex-col relative overflow-x-hidden">
      <RegistrationThankYou />
    </main>
  );
}
