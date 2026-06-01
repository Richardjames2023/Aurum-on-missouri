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
    { id: "fb", href: "https://facebook.com", iconPath: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
    { id: "yt", href: "https://youtube.com", iconPath: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
    { id: "ig", href: "https://instagram.com", iconPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" },
    { id: "x", href: "https://x.com", iconPath: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
    { id: "wa", href: "https://whatsapp.com", iconPath: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" },
    { id: "threads", href: "https://threads.net", iconPath: "M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm2.348 13.916c-1.318.528-2.617.653-3.646.353-.941-.274-1.517-.866-1.713-1.758-.232-1.054-.08-2.618 1.442-3.17 1.155-.418 2.766-.192 3.868.542v.871c-.961-.63-2.31-.762-3.18-.448-.962.348-.99 1.411-.842 2.083.125.568.499.919 1.053 1.002.735.111 1.761-.157 2.748-.75l.512.617zm2.378-4.329c-.06-.554-.265-1.119-.623-1.637-.923-1.336-2.585-2.023-4.681-1.936-2.36.098-4.225 1.171-5.116 2.946-.867 1.727-.868 3.992-.003 5.719.851 1.696 2.588 2.709 4.773 2.783 1.956.066 3.655-.589 4.786-1.844l.758.604c-1.335 1.493-3.342 2.274-5.659 2.196-2.545-.086-4.595-1.285-5.623-3.287-1.042-2.031-1.042-4.707.001-6.782 1.071-2.133 3.259-3.418 6.012-3.533 2.518-.105 4.502.735 5.59 2.308.455.658.724 1.385.801 2.1l-.941.027z" },
    { id: "in", href: "https://linkedin.com", iconPath: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }
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
