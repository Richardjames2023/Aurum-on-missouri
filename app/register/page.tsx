import { Metadata } from 'next';
import { RegisterForm } from '@/components/auth/RegisterForm';

export const metadata: Metadata = {
  title: 'Join Aurum Elite | Aurum on Missouri, Maitama, Abuja',
  description: 'Join the Aurum Elite. Register your guest profile to unlock member-only rates and exclusive benefits at Aurum on Missouri, Maitama, Abuja.',
  alternates: { canonical: '/register' }
};

export default function RegisterPage() {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col relative overflow-x-hidden">
      <RegisterForm />
    </main>
  );
}
