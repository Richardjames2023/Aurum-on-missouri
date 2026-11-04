import { Metadata } from 'next';
import { SignInForm } from '@/components/auth/SignInForm';

// PRODUCTION PORTAL ACCOUNT SEO ACCESS ENGINE
export const metadata: Metadata = {
  title: 'Guest Sign-In | Aurum on Missouri, Maitama, Abuja',
  description: 'Log in to your guest account at Aurum on Missouri to manage your bookings and Aurum Elite benefits.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/signin' }
};

export default function SignInPage() {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col relative overflow-x-hidden">
      {/* Renders the full multi-split secure access block */}
      <SignInForm />
    </main>
  );
}