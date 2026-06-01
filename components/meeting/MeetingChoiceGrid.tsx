import React from 'react';
import Link from 'next/link';

export const MeetingChoiceGrid: React.FC = () => {
  const pillars = [
    { title: "Transparent & trustworthy", desc: "Our proposals are simple to follow so you always know what to expect, with no unwanted surprises or hidden costs." },
    { title: "Industry focused", desc: "We have a long, proven track record of delivering successful meetings across many specialist sectors. We hand-pick the perfect properties based on specific criteria required by each individual industry." },
    { title: "Enabling creativity", desc: "We offer a choice of blank canvas spaces that can be transformed into immersive events. As local experts, we can help create the memorable big picture imagined by our M&E partners." }
  ];

  return (
    <div className="w-full bg-white py-16 px-6 lg:px-12 font-sans flex flex-col items-center border-b border-gray-100">
      <div className="w-full max-w-[1440px] flex flex-col space-y-16">
        
        {/* Core Differentiation Proposition Grid Section */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-stone-900 mb-2">Why Choose Aurum On Missouri Meeting halls?</h2>
          <p className="text-xs md:text-[13px] font-bold text-gray-400 uppercase tracking-widest mb-10 border-b border-gray-100 pb-4">
            At Aurum Onn Missouri Meetings, it&apos;s personal: using our expertise and adaptability, we work closely together with our M&E clients as a true partner.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <div key={i} className="flex flex-col space-y-3 bg-[#FCFBF9] border border-gray-200/50 p-6 rounded-xl shadow-xs hover:shadow-md transition-shadow">
                <h4 className="text-[15px] font-bold text-stone-900 tracking-tight">{p.title}</h4>
                <p className="text-xs md:text-[13px] text-gray-500 font-medium leading-relaxed tracking-wide">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
