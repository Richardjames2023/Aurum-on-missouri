// app/types/thank-you.ts
export interface ConfirmedBookingDetails {
  bookingReference: string;
  guestName: string;
  email?: string;
  phone?: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  nights?: number;
  totalPaid: string;
  currency: string;
  airportTransfer?: boolean;
}
