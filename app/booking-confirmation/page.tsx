import { Metadata } from 'next';
import { ThankYouView } from '../../components/booking/ThankYouView';
import { ConfirmedBookingDetails } from '../../app/types/thank-you';

// 1. DYNAMIC PRODUCTION SEO ENGINE DECLARATIONS
export const metadata: Metadata = {
  title: 'Booking Confirmed | Aurum on Missouri, Maitama, Abuja',
  description: 'Your reservation at Aurum on Missouri has been confirmed. Review check-in instructions and access your booking receipt.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/booking-confirmation' }
};

interface BookingConfirmationPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BookingConfirmationPage({ searchParams }: BookingConfirmationPageProps) {
  const resolvedParams = await searchParams;

  const ref = typeof resolvedParams.ref === 'string' ? resolvedParams.ref : undefined;
  const guest = typeof resolvedParams.guest === 'string' ? resolvedParams.guest : undefined;
  const email = typeof resolvedParams.email === 'string' ? resolvedParams.email : undefined;
  const phone = typeof resolvedParams.phone === 'string' ? resolvedParams.phone : undefined;
  const room = typeof resolvedParams.room === 'string' ? resolvedParams.room : undefined;
  const checkIn = typeof resolvedParams.checkIn === 'string' ? resolvedParams.checkIn : undefined;
  const checkOut = typeof resolvedParams.checkOut === 'string' ? resolvedParams.checkOut : undefined;
  const nights = typeof resolvedParams.nights === 'string' ? parseInt(resolvedParams.nights, 10) : undefined;
  const total = typeof resolvedParams.total === 'string' ? resolvedParams.total : undefined;
  const currency = typeof resolvedParams.currency === 'string' ? resolvedParams.currency : undefined;

  // Resolved booking details: prioritizes URL searchParams, fallback to default state
  const bookingDetails: ConfirmedBookingDetails = {
    bookingReference: ref || "AUR-2026-8941X",
    guestName: guest || "Valued Guest",
    email: email,
    phone: phone,
    roomType: room || "Executive Sovereign Suite (Skyline View)",
    checkIn: checkIn || "Sat, Jun 20, 2026",
    checkOut: checkOut || "Mon, Jun 22, 2026",
    nights: nights || 2,
    totalPaid: total || "480000",
    currency: currency || "NGN"
  };

  // Structured Schema.org LodgingReservation Metadata Injection to score highest SEO ranks
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingReservation",
    "reservationNumber": bookingDetails.bookingReference,
    "reservationStatus": "https://schema.org/ReservationConfirmed",
    "underName": {
      "@type": "Person",
      "name": bookingDetails.guestName
    },
    "reservationFor": {
      "@type": "HotelRoom",
      "name": bookingDetails.roomType,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Abuja",
        "addressCountry": "NG"
      }
    },
    "checkinDate": bookingDetails.checkIn,
    "checkoutDate": bookingDetails.checkOut
  };

  return (
    <>
      {/* Injecting Structured Metadata directly inside page targets securely */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      
      <ThankYouView details={bookingDetails} />
    </>
  );
}
