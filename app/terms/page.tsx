import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Aurum on Missouri, Maitama, Abuja',
  description: 'Review our booking conditions, reservation policies, check-in rules, and cancellation terms at Aurum on Missouri, Maitama, Abuja.',
  alternates: { canonical: '/terms' }
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-stone-800 py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#CAA664] block mb-2">
          Guest Policies & Legal Terms
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-normal text-stone-900 tracking-tight mb-8">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-10 pb-6 border-b border-gray-100">
          Last updated: October 2026. These terms govern reservations and accommodation at Aurum on Missouri, 8 Missouri Street, Maitama, Abuja.
        </p>

        <div className="space-y-8 text-sm leading-relaxed text-stone-700">
          <section>
            <h2 className="text-lg font-bold font-serif text-stone-900 mb-2">1. Check-In & Check-Out</h2>
            <p>
              Check-in is from 1:00 PM and check-out is by 12:00 PM noon. Early check-in or late check-out is subject to availability and prior arrangement with our front desk team. Aurum Elite members enjoy priority check-in and flexible check-out perks subject to occupancy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold font-serif text-stone-900 mb-2">2. Minimum Age Requirement</h2>
            <p>
              Guests must be at least 18 years old to make a reservation and check in at Aurum on Missouri. Younger guests travelling as part of a family are welcomed, provided the reservation is made by an adult who will be present throughout the stay. Valid government-issued photo identification (passport, national ID, or driver’s licence) is required upon arrival.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold font-serif text-stone-900 mb-2">3. Cancellation & Amendment Policy</h2>
            <p>
              Cancellations made at least 48 hours before your scheduled check-in date are processed at no charge. Cancellations made within 48 hours of arrival or non-arrivals may attract a fee equivalent to one night's stay. If your travel plans change, please contact us promptly at +234 707 707 1117 or via email at info@aurumonmissouri.com.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold font-serif text-stone-900 mb-2">4. Occupancy & Additional Guests</h2>
            <p>
              Room rates are based on standard room occupancy:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Standard Room:</strong> Standard occupancy of 2 adults</li>
              <li><strong>Deluxe Room:</strong> Standard occupancy of 2 adults</li>
              <li><strong>Super Deluxe Room:</strong> Standard occupancy of 3 adults</li>
              <li><strong>Executive Room:</strong> Standard occupancy of 3 adults</li>
            </ul>
            <p className="mt-2">
              Additional guests exceeding standard occupancy attract a supplementary charge of ₦25,000 per night, which includes complimentary breakfast and dedicated housekeeping amenities.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold font-serif text-stone-900 mb-2">5. Settlement & Payment Currencies</h2>
            <p>
              All room rates are quoted in Nigerian Naira (NGN) and are inclusive of 7.5% VAT. We accept Nigerian Naira, major debit and credit cards, and bank wire transfers. For guests preferring to settle accounts in foreign currency, front desk conversion rates apply upon check-in.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold font-serif text-stone-900 mb-2">6. Property Care & Non-Smoking</h2>
            <p>
              All indoor rooms, suites, and common areas are strictly non-smoking. Designated outdoor smoking zones are provided on the property grounds. Guests are expected to treat hotel spaces with care.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold font-serif text-stone-900 mb-2">7. Contact & Enquiries</h2>
            <p>
              For any questions regarding these terms or your upcoming stay, please reach our 24-hour reception team:
              <br />
              <strong>Address:</strong> 8 Missouri Street, Maitama, Abuja, Nigeria
              <br />
              <strong>Telephone / WhatsApp:</strong> +234 707 707 1117
              <br />
              <strong>Email:</strong> info@aurumonmissouri.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

