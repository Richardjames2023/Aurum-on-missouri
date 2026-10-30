"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { LuX, LuUser, LuMail, LuPhone, LuFileText, LuPlaneTakeoff } from 'react-icons/lu';
import { BookingFormInput } from '../../app/types/booking';
import { calculateVat } from '../../app/utils/pricing';

interface BookingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomTitle: string;
  pricePerNight: number;
  currency: string;
}

export const BookingFormModal: React.FC<BookingFormModalProps> = ({ 
  isOpen, 
  onClose, 
  roomTitle, 
  pricePerNight, 
  currency 
}) => {
  // INITIALIZE NEXT.JS CLIENT ROUTER FOR RE-DIRECT PATHS
  const router = useRouter();

  const [formData, setFormData] = useState<BookingFormInput>({
    fullName: '',
    email: '',
    phone: '',
    specialRequests: '',
    guestCount: 2,
    idType: 'passport',
    idNumber: '',
    airportTransfer: false,
  });

  const [nights, setNights] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormInput, string>>>({});

  // Trap body layout scroll paths cleanly when modal layers mount
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const validateForm = (): boolean => {
    const nextErrors: typeof errors = {};
    if (!formData.fullName.trim()) nextErrors.fullName = "Full name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) nextErrors.email = "Valid email address is required";
    if (!formData.phone.trim()) nextErrors.phone = "Phone coordinate line is required";
    if (!formData.idNumber.trim()) nextErrors.idNumber = "Identification number verification is required";
    
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate industrial API payment authorization gateway delay hooks safely
    await new Promise(resolve => setTimeout(resolve, 1800));
    setIsSubmitting(false);
    
    onClose();
    
    // REDIRECTS CLIENT SECURELY TO THE SEO-FRIENDLY THANK YOU PAGE
    router.push('/booking-confirmation');
  };

  const currencySymbol = currency === 'NGN' ? '₦' : '$';
  const transferCost = formData.airportTransfer ? 25000 : 0; 
  const roomSubtotal = pricePerNight * nights;
  const vatAmount = calculateVat(roomSubtotal, currency);
  const totalPrice = roomSubtotal + vatAmount + transferCost;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E110E]/75 backdrop-blur-sm font-sans overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-[#FCFBF9] max-w-3xl w-full flex flex-col relative my-8 shadow-2xl overflow-hidden border border-[#cba865]/50 rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        
        <div className="bg-[#4A0A15] px-4 py-5 md:px-8 flex items-center justify-between gap-3 border-b-2 border-[#cba865]">
          <div className="flex min-w-0 items-center gap-3 sm:gap-5">
            <div className="relative w-20 sm:w-24 md:w-28 h-10 shrink-0">
              <Image
                src="/img/AURUM.png"
                alt="Aurum Hotels"
                fill
                className="object-contain object-left brightness-0 invert"
                priority
              />
            </div>
            <div className="min-w-0 border-l border-white/20 pl-3 sm:pl-5">
              <span className="text-[10px] font-bold text-[#cba865] tracking-[0.22em] uppercase block mb-1">
                Secure Checkout
              </span>
              <h2 className="text-base md:text-xl font-serif font-normal tracking-tight text-white break-words">{roomTitle}</h2>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 shrink-0 border border-white/20 hover:border-[#cba865] hover:bg-white/10 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#cba865]/60"
            aria-label="Close booking checkout form"
          >
            <LuX className="w-5 h-5" />
          </button>
        </div>

        {/* FORMS MATRIX CONTENT WRAPPER */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 flex flex-col gap-6 max-h-[75vh] overflow-y-auto custom-scrollbar">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Frame Form Column Inputs Fields */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-xs font-black uppercase text-[#4A0A15] tracking-widest border-b border-[#cba865]/40 pb-2">Guest Information</h3>
              
              <div className="flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">Full Name</label>
                <div className="relative flex items-center">
                  <LuUser className="absolute left-3 w-4 h-4 text-[#cba865]" />
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className={`w-full h-11 pl-10 pr-4 border bg-white text-xs font-medium focus:outline-none focus:border-[#cba865] focus:ring-1 focus:ring-[#cba865]/30 ${errors.fullName ? 'border-red-500' : 'border-stone-200'}`}
                  />
                </div>
                {errors.fullName && <span className="text-[10px] text-red-500 font-bold mt-1">⚠️ {errors.fullName}</span>}
              </div>

              <div className="flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">Email Address</label>
                <div className="relative flex items-center">
                  <LuMail className="absolute left-3 w-4 h-4 text-[#cba865]" />
                  <input 
                    type="email" 
                    placeholder="johndoe@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full h-11 pl-10 pr-4 border bg-white text-xs font-medium focus:outline-none focus:border-[#cba865] focus:ring-1 focus:ring-[#cba865]/30 ${errors.email ? 'border-red-500' : 'border-stone-200'}`}
                  />
                </div>
                {errors.email && <span className="text-[10px] text-red-500 font-bold mt-1">⚠️ {errors.email}</span>}
              </div>

              <div className="flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">Phone Line</label>
                <div className="relative flex items-center">
                  <LuPhone className="absolute left-3 w-4 h-4 text-[#cba865]" />
                  <input 
                    type="tel" 
                    placeholder="+234 916 068 3225"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className={`w-full h-11 pl-10 pr-4 border bg-white text-xs font-medium focus:outline-none focus:border-[#cba865] focus:ring-1 focus:ring-[#cba865]/30 ${errors.phone ? 'border-red-500' : 'border-stone-200'}`}
                  />
                </div>
                {errors.phone && <span className="text-[10px] text-red-500 font-bold mt-1">⚠️ {errors.phone}</span>}
              </div>
            </div>

            {/* Right Frame Verification Credentials Fields */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-xs font-black uppercase text-[#4A0A15] tracking-widest border-b border-[#cba865]/40 pb-2">Stay Settings</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">Nights Duration</label>
                  <input 
                    type="number" 
                    min="1"
                    value={nights}
                    onChange={(e) => setNights(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full h-11 border border-stone-200 bg-white text-xs font-bold px-4 focus:outline-none focus:border-[#cba865] focus:ring-1 focus:ring-[#cba865]/30"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">Total Occupants</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="6"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({...formData, guestCount: Math.max(1, parseInt(e.target.value) || 1)})}
                    className="w-full h-11 border border-stone-200 bg-white text-xs font-bold px-4 focus:outline-none focus:border-[#cba865] focus:ring-1 focus:ring-[#cba865]/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">ID Type</label>
                  <select 
                    value={formData.idType}
                    onChange={(e) => setFormData({...formData, idType: e.target.value as any})}
                    className="w-full h-11 border border-stone-200 bg-white text-xs font-bold px-3 focus:outline-none focus:border-[#cba865] focus:ring-1 focus:ring-[#cba865]/30 cursor-pointer"
                  >
                    <option value="passport">International Passport</option>
                    <option value="national_id">National ID Card</option>
                    <option value="driver_license">Drivers License</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">Document Number</label>
                  <div className="relative flex items-center">
                    <LuFileText className="absolute left-3 w-4 h-4 text-[#cba865]" />
                    <input 
                      type="text" 
                      placeholder="A0023456"
                      value={formData.idNumber}
                      onChange={(e) => setFormData({...formData, idNumber: e.target.value})}
                      className={`w-full h-11 pl-10 pr-4 border bg-white text-xs font-medium focus:outline-none focus:border-[#cba865] focus:ring-1 focus:ring-[#cba865]/30 ${errors.idNumber ? 'border-red-500' : 'border-stone-200'}`}
                    />
                  </div>
                  {errors.idNumber && <span className="text-[10px] text-red-500 font-bold mt-1">⚠️ {errors.idNumber}</span>}
                </div>
              </div>

              {/* Add-on Amenities Checkboxes */}
              <div className="pt-2">
                <label className="flex items-center space-x-3 cursor-pointer select-none bg-white border border-stone-200 p-3 hover:border-[#cba865]/70 transition-colors">
                  <input 
                    type="checkbox" 
                    checked={formData.airportTransfer}
                    onChange={(e) => setFormData({...formData, airportTransfer: e.target.checked})}
                    className="w-4 h-4 accent-[#4A0A15] cursor-pointer"
                  />
                  <div className="flex items-center space-x-2 text-stone-800">
                    <LuPlaneTakeoff className="w-4 h-4 text-[#cba865]" />
                    <span className="text-xs font-bold uppercase tracking-wide">Request Airport Shuttle Transfer (+₦25,000)</span>
                  </div>
                </label>
              </div>

            </div>
          </div>

          {/* Bottom Custom Requests Area Box */}
          <div className="flex flex-col w-full">
            <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">Special Requests or Preferences</label>
            <textarea 
              rows={2}
              placeholder="e.g. Early arrival request, structural dietary allergy tokens, high-floor suite configuration choice..."
              value={formData.specialRequests}
              onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
              className="w-full border border-stone-200 bg-white text-xs font-medium p-4 focus:outline-none focus:border-[#cba865] focus:ring-1 focus:ring-[#cba865]/30 resize-none"
            />
          </div>

          {/* REAL TIME PRICING DISPLAY MATRIX SHEET SUMMARY */}
          <div className="w-full bg-white border border-[#cba865]/40 p-4 md:p-5 mt-2 flex flex-col gap-3 shadow-sm">
            <div className="flex items-center justify-between text-[11px] font-bold text-gray-500">
              <span>Room rate ({nights} {nights === 1 ? 'night' : 'nights'})</span>
              <span>{currencySymbol}{roomSubtotal.toLocaleString()}</span>
            </div>
            {currency === 'NGN' && (
              <div className="flex items-center justify-between text-[11px] font-bold text-gray-500">
                <span>VAT (7.5%)</span>
                <span>{currencySymbol}{vatAmount.toLocaleString()}</span>
              </div>
            )}
            {transferCost > 0 && (
              <div className="flex items-center justify-between text-[11px] font-bold text-gray-500">
                <span>Airport shuttle</span>
                <span>{currencySymbol}{transferCost.toLocaleString()}</span>
              </div>
            )}
            <div className="h-px bg-[#cba865]/40" />
            <div className="flex items-center justify-between">
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest">
                  {currency === 'NGN' ? 'Total including VAT' : 'Total'}
                </span>
                <span className="text-2xl font-black font-serif text-[#4A0A15]">
                  {currencySymbol}{totalPrice.toLocaleString()}
                </span>
              </div>
              <div className="text-right text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <span>{currencySymbol}{pricePerNight.toLocaleString()} / night</span>
              </div>
            </div>
          </div>

          {/* Form Action Triggers Submission Control Pillar */}
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#4A0A15] hover:bg-[#36070E] disabled:bg-stone-300 text-white font-extrabold text-xs tracking-widest uppercase py-4 border-b-2 border-[#cba865] rounded-3xl transition-all shadow-md transform active:scale-[0.99] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#cba865]/60 focus:ring-offset-2"
          >
            {isSubmitting ? 'Authorizing Secure Booking Link...' : 'Confirm Secure Hotel Booking'}
          </button>

        </form>

      </div>
    </div>
  );
};
