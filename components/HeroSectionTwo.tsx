"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ArrowUpRight,
  Wifi,
  Sparkles,
  Utensils,
  MapPin,
} from "lucide-react";

// Carousel Slide Data Structure
const SLIDES = [
  {
    id: 1,
    image: "/img/ANNEXEXEC-6.webp",
    location: "8 Missouri St, Maitama, Abuja",
    title1: "Welcome to",
    accent: "Aurum",
    title2: "Designed with you",
    title3: "in mind.",
    tag: "Timeless Gateway",
    desc: "Escape the ordinary with luxurious suites, gourmet dining, and serene surroundings.",
  },
  {
    id: 2,
    image: "/img/ANNEXEXEC-8.webp",
    location: "8 Missouri St, Maitama, Abuja",
    title1: "Bespoke",
    accent: "Spaces",
    title2: "Designed For The",
    title3: "Modern Elite.",
    tag: "Exclusive Living",
    desc: "Immerse yourself in unparalleled elegance, quiet architectural luxury, and personalized hospitality.",
  },
  {
    id: 3,
    image: "/img/AoM-10.webp",
    location: "8 Missouri St, Maitama, Abuja",
    title1: "Serene",
    accent: "Retreat",
    title2: "Awaken In True",
    title3: "Peace.",
    tag: "Sanctuary Oasis",
    desc: "Indulge your senses with breathtaking panoramic views. Relax, unwind, and take in the stunning scenery from the comfort of Aurum.",
  },
];

export default function HeroSection() {
  // --- NAVIGATION INSTANCE ---
  const router = useRouter();

  // --- STATE ENGINES ---
  const [currentSlide, setCurrentSlide] = useState(0);

  // Booking Engine System States
  const [checkInDate, setCheckInDate] = useState<Date | null>(new Date(2026, 6, 14)); 
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(new Date(2026, 6, 15)); 
  const [activeCalendarSelector, setActiveCalendarSelector] = useState<'in' | 'out' | null>(null);
  const [currentCalendarView, setCurrentCalendarView] = useState<Date>(new Date(2026, 6, 1)); 

  // --- REFS FOR OUTSIDE CLICK CLOSURES ---
  const calendarRef = useRef<HTMLDivElement>(null);

  // --- SIDE EFFECTS CONTROL (Outside Clicks) ---
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (calendarRef.current && !calendarRef.current.contains(target)) {
        setActiveCalendarSelector(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Auto-play loop setting for Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // --- CALENDAR ENGINE ACTIONS ---
  const getDaysInMonthArray = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const stepsArray: (Date | null)[] = Array(firstDayIndex).fill(null);
    for (let d = 1; d <= totalDays; d++) {
      stepsArray.push(new Date(year, month, d));
    }
    return stepsArray;
  };

  const handleDateCellSelection = (date: Date) => {
    if (activeCalendarSelector === 'in') {
      setCheckInDate(date);
      if (checkOutDate && date >= checkOutDate) {
        setCheckOutDate(null);
      }
      setActiveCalendarSelector('out');
    } else if (activeCalendarSelector === 'out') {
      if (checkInDate && date > checkInDate) {
        setCheckOutDate(date);
        setActiveCalendarSelector(null);
      } else if (!checkInDate) {
        setCheckInDate(date);
        setActiveCalendarSelector('out');
      }
    }
  };

  // --- FORMATTERS FOR INTERFACE ---
  const formatDisplayDate = (dateObj: Date | null, fallback: string) => {
    if (!dateObj) return fallback;
    return dateObj.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
  };

  const isSameDayValue = (d1: Date | null, d2: Date | null) => {
    if (!d1 || !d2) return false;
    return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
  };

  const isDateInBetweenSelection = (date: Date | null) => {
    if (!date || !checkInDate || !checkOutDate) return false;
    return date > checkInDate && date < checkOutDate;
  };

  // --- EXECUTE ROUTING SEARCH TRIGGER ---
  const handleSearchExecution = () => {
    // Constructing query string parameter metrics to feed selection criteria safely to the rooms interface page layout
    const queryParams = new URLSearchParams();
    if (checkInDate) queryParams.append("checkIn", checkInDate.toISOString());
    if (checkOutDate) queryParams.append("checkOut", checkOutDate.toISOString());
    
    router.push(`/rooms?${queryParams.toString()}`);
  };

  const slideUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1.0] as const,
      },
    }),
  };

  return (
    <section className="relative h-[100vh] min-h-[850px] w-full overflow-hidden bg-black font-sans text-white">
      
      {/* FLOATING HEADER SEARCH BAR */}
      <header className="absolute top-0 left-0 w-full z-40">
        <div className="w-full py-3.5 px-6 relative z-10">
          <div className="max-w-[1320px] mx-auto bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-gray-200 p-1 relative">

            <div className="w-full md:w-10/12 grid grid-cols-2 divide-x divide-gray-200 relative" ref={calendarRef}>
              <div
                onClick={() => setActiveCalendarSelector('in')}
                className={`flex items-center justify-between px-4 py-2.5 cursor-pointer group transition-colors rounded-l-md ${activeCalendarSelector === 'in' ? 'bg-amber-50/50' : ''}`}
              >
                <div className="flex items-center">
                  <div className="text-gray-500 mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold tracking-tight">Check-in</span>
                    <span className="text-[13px] text-gray-800 font-bold mt-0.5">{formatDisplayDate(checkInDate, 'Tue 14 Aug')}</span>
                  </div>
                </div>
                <svg className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </div>

              <div
                onClick={() => setActiveCalendarSelector('out')}
                className={`flex items-center justify-between px-4 py-2.5 cursor-pointer group transition-colors ${activeCalendarSelector === 'out' ? 'bg-amber-50/50' : ''}`}
              >
                <div className="flex items-center">
                  <div className="text-gray-500 mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold tracking-tight">Check-out</span>
                    <span className="text-[13px] text-gray-800 font-bold mt-0.5">{formatDisplayDate(checkOutDate, 'Wed 15 Aug')}</span>
                  </div>
                </div>
                <svg className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </div>

              {/* PREMIUM DYNAMIC CUSTOM CALENDAR POPOVER OVERLAY */}
              <div className={`absolute top-[115%] left-0 w-full md:w-[460px] bg-white border border-gray-100 rounded-xl shadow-2xl p-4 z-50 transform transition-all duration-200 origin-top-left ${activeCalendarSelector ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                <div className="flex items-center justify-between mb-4 px-1">
                  <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                    {currentCalendarView.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                  <div className="flex space-x-1">
                    <button onClick={() => setCurrentCalendarView(new Date(currentCalendarView.getFullYear(), currentCalendarView.getMonth() - 1, 1))} className="p-1 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={() => setCurrentCalendarView(new Date(currentCalendarView.getFullYear(), currentCalendarView.getMonth() + 1, 1))} className="p-1 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-gray-400 uppercase mb-2">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => <div key={day}>{day}</div>)}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {getDaysInMonthArray(currentCalendarView).map((dayDate, index) => {
                    if (!dayDate) return <div key={`empty-${index}`} />;
                    const isStart = isSameDayValue(dayDate, checkInDate);
                    const isEnd = isSameDayValue(dayDate, checkOutDate);
                    const isBetween = isDateInBetweenSelection(dayDate);

                    return (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleDateCellSelection(dayDate)}
                        className={`h-9 w-full text-xs font-bold rounded-lg flex items-center justify-center transition-all ${isStart || isEnd ? 'bg-[#4A0A15] text-white shadow-md scale-105' : isBetween ? 'bg-amber-50 text-amber-900 rounded-none' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        {dayDate.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/12 p-1">
              <button onClick={handleSearchExecution} className="w-full bg-[#CAA664] text-white py-3 px-6 rounded-md font-bold text-[13px] tracking-wide hover:bg-[#36070E] transition-colors whitespace-nowrap">
                Search
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* LAYER 1: BACKGROUND IMAGES CAROUSEL */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={SLIDES[currentSlide].image}
            alt="Luxury Resort Accommodations"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Atmospheric Cinema Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-black/45" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)]" />

      {/* LAYER 2: INTERVALLIC CONTENT TEXT SYSTEMS */}
      <div className="relative z-20 flex h-full w-full items-center pt-20">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12 flex flex-col justify-center h-full pt-8">
          <div
            key={currentSlide}
            className="grid w-full grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end pb-10"
          >
            {/* LEFT COLUMN */}
            <div className="lg:col-span-7 flex flex-col justify-end items-start">
              
              {/* DYNAMIC HOTEL LOCATION OVERLAY (Positioned directly above the title) */}
              <div className="mb-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-white/80 uppercase bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
                  >
                    <MapPin size={12} className="text-[#cba865]" />
                    <span>{SLIDES[currentSlide].location}</span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <h1 className="font-serif tracking-tight text-white leading-[1.05]">
                <motion.span
                  custom={0.4}
                  initial="hidden"
                  animate="visible"
                  variants={slideUpVariants}
                  className="block text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-light"
                >
                  {SLIDES[currentSlide].title1}
                  <span className="text-[#cba865] font-sans italic font-normal ml-3">
                    {SLIDES[currentSlide].accent}
                  </span>
                </motion.span>

                <motion.span
                  custom={0.6}
                  initial="hidden"
                  animate="visible"
                  variants={slideUpVariants}
                  className="block text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-light mt-1"
                >
                  {SLIDES[currentSlide].title2}
                </motion.span>

                <motion.span
                  custom={0.8}
                  initial="hidden"
                  animate="visible"
                  variants={slideUpVariants}
                  className="block text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-light mt-1"
                >
                  {SLIDES[currentSlide].title3}
                </motion.span>
              </h1>

              {/* Social Proof Badge */}
              <motion.div
                custom={0.9}
                initial="hidden"
                animate="visible"
                variants={slideUpVariants}
                className="mt-4 inline-flex items-center gap-2.5 bg-black/30 border border-white/10 backdrop-blur-md rounded-full pl-2 pr-4 py-1 w-max"
              >
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full border border-black bg-gray-600 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#cba865] to-amber-200 opacity-40" />
                  </div>
                  <div className="w-6 h-6 rounded-full border border-black bg-gray-500 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-600 to-amber-300 opacity-40" />
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-white/90 font-medium">
                  Trusted by 200+ Customer
                </span>
              </motion.div>

              {/* Benefits stack */}
              <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
                <motion.div
                  custom={1.0}
                  initial="hidden"
                  animate="visible"
                  variants={slideUpVariants}
                  className="text-xs uppercase tracking-widest text-white/70 font-medium leading-relaxed border-l-2 border-[#cba865] pl-4"
                >
                  <p>many Exclusive</p>
                  <p>Benefit for you</p>
                </motion.div>

                <motion.div
                  custom={1.2}
                  initial="hidden"
                  animate="visible"
                  variants={slideUpVariants}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-4 py-2"
                >
                  {[
                    <Wifi size={14} key="wifi" />,
                    <Sparkles size={14} key="spa" />,
                    <Utensils size={14} key="dining" />,
                  ].map((icon, idx) => (
                    <div
                      key={idx}
                      className="text-white/70 hover:text-[#cba865] transition-colors duration-300 cursor-pointer"
                    >
                      {icon}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-5 flex lg:justify-end justify-start">
              <motion.div
                custom={1.4}
                initial="hidden"
                animate="visible"
                variants={slideUpVariants}
                className="max-w-md lg:max-w-sm w-full bg-black/35 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl"
              >
                <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-[#cba865] font-semibold">
                  {SLIDES[currentSlide].tag}
                </span>

                <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                  {SLIDES[currentSlide].desc}
                </p>

                <Link
                  href="/rooms"
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#cba865] px-6 py-3.5 text-xs font-medium uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#b8965a] hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#cba865]/50"
                >
                  <span>Reserve Your Stay</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* CAROUSEL PROGRESS DOT INDICATORS */}
      <div className="absolute bottom-8 right-6 md:right-12 z-30 flex items-center gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative flex h-8 w-2 items-center justify-center"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`w-[2px] transition-all duration-500 rounded-full ${
                currentSlide === index
                  ? "h-6 bg-[#cba865]"
                  : "h-3 bg-white/40 group-hover:bg-white"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}