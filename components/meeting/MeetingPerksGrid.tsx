import React from 'react';
import Link from 'next/link';

export const MeetingPerksGrid: React.FC = () => {
  return (
    <div className="w-full bg-white py-16 px-6 lg:px-12 font-sans flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col space-y-16">
        
        {/* Top Solution Pitch Module */}
        <div className="max-w-4xl flex flex-col space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 tracking-tight leading-snug">
            Flexible, functional, and impactful Meeting & Event solutions
          </h2>
          <p className="text-[#cba865] text-sm md:text-[15px] font-medium leading-relaxed tracking-wide">
            As a partner, moment maker, and solution-finder, we understand that flexibility and functionality are key to ensuring we can seamlessly deliver exactly what our M&E partners need to create impactful events.
          </p>
          <p className="text-gray-500 text-sm md:text-[15px] font-medium leading-relaxed tracking-wide">
            We aim to offer the most dynamic, flexible, and functional solutions in the modern meetings and events marketplace—making sure every M&E planner enjoys peace of mind when they partner with Radisson Meetings, whether they are co-creating truly impactful meeting & event or arranging group accommodation.
          </p>
        </div>

      </div>
    </div>
  );
};
