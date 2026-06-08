import React from 'react';
import Link from 'next/link';

export const MeetingPerksGrid: React.FC = () => {
  return (
    <div className="w-full bg-white py-16 px-6 lg:px-12 font-sans flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col space-y-16">
        
        {/* Top Solution Pitch Module */}
        <div className="max-w-4xl flex flex-col space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 tracking-tight leading-snug">
            The right space. The right people. The kind of event that guests do not forget 
          </h2>
          <p className="text-[#cba865] text-sm md:text-[15px] font-medium leading-relaxed tracking-wide">
            We understand the demands of a well-hosted event. We exist to ease that burden for you. 
          </p>
          <p className="text-gray-500 text-sm md:text-[15px] font-medium leading-relaxed tracking-wide">
            When you choose our conference hall, you can leave the logistics to us, while you focus on making your event memorable. 
          </p>
        </div>

      </div>
    </div>
  );
};
