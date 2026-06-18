"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer: React.FC = () => {
  // Hot Destinations rounded badge links configuration array 
  const hotDestinations = [
    { label: "Abuja National Mosque", href: "/destinations#mosque" },
    { label: "Nike Art Gallery", href: "/destinations#nike" },
    { label: "Thought Pyramid Art Centre", href: "/destinations#pyramid" },
    { label: "Central Park", href: "/destinations#central" },
    { label: "Art Tech District", href: "/destinations#arttech" },
    { label: "Millennium Park", href: "/destinations#millennium" }
  ];

  // Social link platform rendering vector icon matrix blocks
  const socialPlatforms = [
    { id: "fb", href: "https://www.facebook.com/people/Aurum-On-Missouri/61581054107852/#", iconPath: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
    { id: "yt", href: "https://www.youtube.com/@AurumonMissouri", iconPath: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
    { id: "ig", href: "https://www.instagram.com/aurumonmissouri/", iconPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" },
  ];

  return (
    <footer className="w-full bg-black text-white pt-12 pb-8 px-6 md:px-12 lg:px-16 flex flex-col items-center border-t border-white/5 select-none font-sans">
      <div className="w-full max-w-[1440px] flex flex-col items-start text-left">
        {/* BRAND LOGO SEGMENT */}
        <div className="w-full mb-10 pb-6 border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link href="/" className="inline-block group focus:outline-none">
             <div className="relative w-36 h-12 transition-opacity group-hover:opacity-80">
               <Image
                 src="/img/AURUM.png"
                 alt="Azusa Hotels Logo"
                 fill
                 className="object-contain object-left"
                 priority
              />             
              </div>
          </Link>
          <span className="text-[10px] tracking-[0.25em] uppercase text-gray-400 font-extrabold sm:self-end sm:mb-1">
            8 Missouri St, Maitama, Abuja (Hotels & Apartments)
          </span>
         </div>
        
        {/* ROW 1: HOT DESTINATIONS PILL CLUSTER */}
        <div className="w-full flex flex-col mb-10">
          <h4 className="text-base font-medium tracking-wide mb-5 text-[#F5E6C8]/90 font-serif">
            Hot Destinations
          </h4>
          <div className="flex flex-wrap gap-3">
            {hotDestinations.map((dest, index) => (
              <Link 
                key={index}
                href={dest.href}
                className="px-4 py-2 border border-white/30 rounded-full text-xs font-medium text-white/80 hover:text-white hover:border-white/60 transition-all whitespace-nowrap bg-white/5 hover:bg-white/10"
              >
                {dest.label}
              </Link>
            ))}
          </div>
        </div>

        {/* ROW 2: QUICK LINK SYSTEM REVENUE DIRECTORIES */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10 mb-12">
          
          {/* Column A: Quick Links */}
          <div className="flex flex-col space-y-3">
            <h5 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] mb-2">Quick links</h5>
            <Link href="/rooms" className="text-xs text-white/70 hover:text-white transition-colors">Rooms</Link>
            <Link href="/benefits" className="text-xs text-white/70 hover:text-white transition-colors">Benefits</Link>
            <Link href="/terms" className="text-xs text-white/70 hover:text-white transition-colors">Terms and Conditions</Link>
            <Link href="/blog" className="text-xs text-white/70 hover:text-white transition-colors">Blog</Link>
            <Link href="/safety" className="text-xs text-white/70 hover:text-white transition-colors">Health and Safety</Link>
          </div>

          {/* Column B: Corporate */}
          <div className="flex flex-col space-y-3">
            <h5 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] mb-2">Corporate</h5>
            <Link href="/careers" className="text-xs text-white/70 hover:text-white transition-colors">Careers</Link>
          </div>

          {/* Column C: Legal */}
          <div className="flex flex-col space-y-3">
            <h5 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] mb-2">Legal</h5>
            <Link href="/modern-slavery" className="text-xs text-white/70 hover:text-white transition-colors">Modern Slavery Statement</Link>
          </div>

          {/* Column D: Help Line Center */}
          <div className="flex flex-col space-y-3">
            <h5 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] mb-2">Help</h5>
            <Link href="/contact" className="text-xs text-white/70 hover:text-white transition-colors">Contact</Link>
            <Link href="/faq" className="text-xs text-white/70 hover:text-white transition-colors">FAQ</Link>
            <Link href="/sitemap" className="text-xs text-white/70 hover:text-white transition-colors">Sitemap</Link>
            <a href="tel:+2349160683225" className="text-xs font-semibold text-[#F5E6C8] hover:underline transition-all mt-1">
              +234 707 707 1117
            </a>
          </div>

        </div>

        {/* ROW 3: SOCIAL PLATFORMS MATRIX SECTION */}
        <div className="w-full flex flex-col border-t border-white/10 pt-8 mb-8">
          <h5 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-4">Socials</h5>
          <div className="flex flex-wrap gap-3">
            {socialPlatforms.map((social) => (
              <a 
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white hover:bg-[#D4AF37] text-[#4A0A15] flex items-center justify-center transition-all shadow-md transform hover:scale-105"
                aria-label={`Follow Azusa on ${social.id}`}
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d={social.iconPath} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* ROW 4: COPYRIGHT BASELINE STATEMENT SHEET */}
        <div className="w-full border-t border-white/10 pt-6 text-center md:text-left">
          <p className="text-[11px] text-white/50 font-medium tracking-wide leading-relaxed">
            &copy; 2026 Aurum On Missouri. All rights reserved. Aurum on Missouri, 8 Missouri St, Maitama, Abuja, Federal Capital Territory.
          </p>
        </div>

      </div>
    </footer>
  );
};
