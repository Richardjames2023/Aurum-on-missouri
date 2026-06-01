"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  ArrowUpRight, 
  Wifi, 
  Waves, 
  Sparkles, 
  Utensils,
  MapPin 
} from "lucide-react";

// Carousel Slide Data Structure with individual locations
const SLIDES = [
  {
    id: 1,
    image: "/img/A1.webp",
    location: "8 Missouri St, Maitama, Abuja",
    title1: "A Hotel",
    accent: "Beyond",
    title2: "Stay A World of",
    title3: "Luxury.",
    tag: "Timeless Gateway",
    desc: "Escape the ordinary with luxurious suites, gourmet dining, and serene surroundings."
  },
  {
    id: 2,
    image: "/img/A2.webp",
    location: "8 Missouri St, Maitama, Abuja",
    title1: "Bespoke",
    accent: "Spaces",
    title2: "Designed For The",
    title3: "Modern Elite.",
    tag: "Exclusive Living",
    desc: "Immerse yourself in unparalleled elegance, quiet architectural luxury, and personalized hospitality."
  },
  {
    id: 3,
    image: "/img/A3.webp",
    location: "8 Missouri St, Maitama, Abuja",
    title1: "Serene",
    accent: "Retreat",
    title2: "Awaken In True",
    title3: "Coastal Peace.",
    tag: "Sanctuary Oasis",
    desc: "Indulge your senses with panoramic views, restorative wellness therapies, and private terrace waters."
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play loop setting
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slideUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        delay: delay,
        ease: [0.215, 0.610, 0.355, 1.000] as const,
      }
    })
  };

  return (
    <section className="relative h-[85vh] min-h-[650px] w-full overflow-hidden bg-black font-sans text-white">
      
      {/* LAYER 1: BACKGROUND IMAGES */}
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

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 z-10 bg-black/40" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)]" />

      {/* DYNAMIC HOTEL LOCATION OVERLAY (Top-Left) */}
      <div className="absolute top-8 left-6 md:left-12 z-30">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-white/80 uppercase bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5"
          >
            <MapPin size={12} className="text-[#cba865]" />
            <span>{SLIDES[currentSlide].location}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* LAYER 2: INTERVALLIC CONTENT UNITS */}
      <div className="relative z-20 flex h-full w-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12 flex flex-col justify-center h-full pt-12">
          
          <div key={currentSlide} className="grid w-full grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end pb-10">
            
            {/* LEFT COLUMN */}
            <div className="lg:col-span-7 flex flex-col justify-end">
              <h1 className="font-serif tracking-tight text-white leading-[1.05]">
                <motion.span 
                  custom={0.4}
                  initial="hidden"
                  animate="visible"
                  variants={slideUpVariants}
                  className="block text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-light"
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

              {/* Social Proof Badge matching hero.webp */}
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
                  Trusted by 2000+ Customer
                </span>
              </motion.div>

              {/* Benefits & Unified Horizon Pill Container */}
              <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
                <motion.div 
                  custom={1.0}
                  initial="hidden"
                  animate="visible"
                  variants={slideUpVariants}
                  className="text-xs uppercase tracking-widest text-white/70 font-medium leading-relaxed border-l-2 border-[#cba865] pl-4"
                >
                  <p>23+ Exclusive</p>
                  <p>Benefit for you</p>
                </motion.div>

                {/* Sleek unified horizontal pill block */}
                <motion.div
                  custom={1.2}
                  initial="hidden"
                  animate="visible"
                  variants={slideUpVariants}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-4 py-2"
                >
                  {[
                    <Wifi size={14} key="wifi" />, 
                    <Waves size={14} key="pool" />, 
                    <Sparkles size={14} key="spa" />, 
                    <Utensils size={14} key="dining" />
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
                className="max-w-md lg:max-w-sm w-full bg-black/25 backdrop-blur-md p-6 rounded-2xl border border-white/10"
              >
                <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-[#cba865] font-semibold">
                  {SLIDES[currentSlide].tag}
                </span>

                <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                  {SLIDES[currentSlide].desc}
                </p>

                {/* Updated Action Button with Up-Right Arrow Icon */}
                <button className="group mt-6 flex items-center gap-2 rounded-full bg-[#cba865] px-6 py-3.5 text-xs font-medium uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#b8965a] hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#cba865]/50 focus:ring-offset-2">
                  <span>Discover Now</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      {/* DISCRETE PROGRESS INDICATORS (Positioned at Bottom-Right) */}
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
                currentSlide === index ? "h-6 bg-[#cba865]" : "h-3 bg-white/40 group-hover:bg-white"
              }`} 
            />
          </button>
        ))}
      </div>
    </section>
  );
}