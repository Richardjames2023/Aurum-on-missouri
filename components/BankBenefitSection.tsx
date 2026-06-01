"use client";

import React from "react";
import { Tag, Percent, ConciergeBell } from "lucide-react";

export default function ExclusiveBenefits() {
  return (
    <section className="w-full bg-[#edeef0] py-16 md:py-20 font-sans text-slate-900">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-4xl font-semibold tracking-tight text-[#cba865]">
              Enjoy the exclusive benefits
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600 font-normal leading-relaxed">
              As a Aurum on missouri member, you enjoy exclusive benefits. Join for free and elevate your stay
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button className="border border-black bg-white hover:bg-slate-50 text-slate-900 text-[11px] font-bold tracking-wider uppercase px-6 py-3 rounded-full transition-colors duration-200">
              Discover More Benefits
            </button>
            <button className="bg-black hover:bg-slate-800 text-white text-[11px] font-bold tracking-wider uppercase px-6 py-3 rounded-full transition-colors duration-200">
              Become a Member
            </button>
          </div>
        </div>

        {/* Perks Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Member Only Rate */}
          <div className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[#f1f3f5] flex items-center justify-center text-slate-700 shrink-0">
              <Tag size={24} className="stroke-[1.5]" />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold text-slate-900 leading-tight">
                Member Only Rate
              </h3>
              <p className="text-sm text-slate-500 mt-1 font-normal">
                Get membership discount
              </p>
            </div>
          </div>

          {/* Card 2: Discount on Food and Beverages */}
          <div className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[#f1f3f5] flex items-center justify-center text-slate-700 shrink-0">
              <Percent size={24} className="stroke-[1.5]" />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold text-slate-900 leading-tight">
                Discount on Food and Beverages
              </h3>
              <p className="text-sm text-slate-500 mt-1 font-normal">
                Discount on food and beverages
              </p>
            </div>
          </div>

          {/* Card 3: Priority Line */}
          <div className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[#f1f3f5] flex items-center justify-center text-slate-700 shrink-0">
              <ConciergeBell size={24} className="stroke-[1.5]" />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold text-slate-900 leading-tight">
                Priority Line
              </h3>
              <p className="text-sm text-slate-500 mt-1 font-normal leading-normal">
                Save waiting time during check-in and check-out
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}