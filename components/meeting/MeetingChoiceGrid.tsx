import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Added for optimized image rendering

export const MeetingChoiceGrid: React.FC = () => {
  const pillars = [
    { title: "Transparent & trustworthy", desc: "Our proposals are simple to follow so you always know what to expect, with no unwanted surprises or hidden costs." },
    { title: "Industry focused", desc: "We have a long, proven track record of delivering successful meetings across many specialist sectors. We hand-pick the perfect properties based on specific criteria required by each individual industry." },
    { title: "Enabling creativity", desc: "We offer a choice of blank canvas spaces that can be transformed into immersive events. As local experts, we can help create the memorable big picture imagined by our M&E partners." }
  ];

  // Placeholder image 
  const galleryImages = [
    "/img/BOB6194.webp",
    "/img/BOB6804.webp",
    "/img/BOB6809.webp",
    "/img/BOB6825.webp",
  ];

  return (
    <div className="w-full bg-white py-16 px-6 lg:px-12 font-sans flex flex-col items-center border-b border-gray-100">
      <div className="w-full max-w-[1440px] flex flex-col space-y-16">
        
        {/* Core Differentiation Proposition Grid Section */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-stone-900 mb-2">Why Choose Aurum On Missouri Meeting halls?</h2>
          <p className="text-xs md:text-[13px] font-bold text-gray-400 uppercase tracking-widest mb-10 border-b border-gray-100 pb-4">
            At Aurum On Missouri Meetings, it&apos;s personal: using our expertise and adaptability, we work closely together with our M&E clients as a true partner.
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

        {/* Visual Gallery Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg md:text-xl font-bold tracking-tight text-stone-900">Explore Our Spaces</h3>
            <Link href="/gallery" className="text-[11px] font-bold tracking-widest uppercase text-[#CAA664] hover:text-[#36070E] transition-colors">
              View Full Gallery &rarr;
            </Link>
          </div>
          
          {/* 4-column grid on desktop, 2-column on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <div key={index} className="relative h-48 md:h-64 w-full rounded-xl overflow-hidden group bg-gray-100">
                <Image 
                  src={src} 
                  alt={`Aurum Meeting Space ${index + 1}`} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle dark overlay on hover to make it feel interactive */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
