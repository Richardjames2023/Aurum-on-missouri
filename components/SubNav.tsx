// "use client";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// // Type definition for navigation items
// export interface SubNavItem {
//   label: string;
//   href: string;
//   active: boolean;
// }

// // Props definition for the reusable component
// interface SubNavProps {
//   items: SubNavItem[];
//   ctaText?: string;
//   onCtaClick?: () => void;
// }

// export default function SubNav({ 
//   items, 
//   ctaText = "Book", 
//   onCtaClick 
// }: SubNavProps) {
//      const router = useRouter();

//     const handleCtaClick = () => {
//     // Put your booking logic here (e.g., navigate to a booking page)
//     router.push("/booking"); 
//   };
//   return (
//     <section className="bg-black border-b border-[#300508] sticky top-0 z-40 w-full">
//       <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 flex items-center justify-between">
//         <div className="flex flex-1 items-center overflow-x-auto scrollbar-hide py-3 space-x-1 sm:space-x-2 mr-4">
//           {items.map((item, index) => (
//             <Link
//               key={index}
//               href={item.href}
//               className={`whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-[13px] sm:text-sm font-medium transition-all duration-200 ${
//                 item.active
//                   ? "bg-white text-[#4a0a0c] shadow-sm transform scale-105"
//                   : "text-gray-300 hover:text-white hover:bg-white/10"
//               }`}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </div>
//         <div className="py-3 flex-shrink-0">
//           <button 
//             onClick={onCtaClick}
//             className="bg-[#d4b58e] hover:bg-[#c4a37a] text-[#4a0a0c] px-6 sm:px-8 py-2 md:py-2.5 rounded-full text-sm font-bold tracking-widest transition-all hover:shadow-lg uppercase transform hover:-translate-y-0.5"
//           >
//             {ctaText}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

interface SubNavItem {
  label: string;
  href: string;
}

export default function SubNav() {
  const router = useRouter();
  const pathname = usePathname();

  const subnavItems: SubNavItem[] = [
    { label: "Overview", href: "/" },
    { label: "Rooms", href: "/rooms" },
    { label: "Dining", href: "/restaurant" },
    { label: "Meetings & Events", href: "/meetings-events" },
    { label: "Deals", href: "/deals" },
    { label: "About", href: "/about" },
    { label: "Nearby Attractions", href: "/explore" },
    { label: "Contact", href: "/contact" },
  ];

  const handleCtaClick = () => {
    router.push("/");
  };

  return (
     <section className="bg-black border-b border-[#300508] sticky top-0 z-40 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 flex items-center justify-between">
        {/* Navigation Items Area */}
        <div className="flex flex-1 items-center overflow-x-auto scrollbar-hide py-3 space-x-1 sm:space-x-2 mr-4">
          {subnavItems.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={index}
                href={item.href}
                className={`whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-[13px] sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white text-[#4a0a0c] shadow-sm transform scale-105 font-semibold"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Area */}
        <div className="py-3 flex-shrink-0">
          <button
            onClick={handleCtaClick}
            className="bg-[#d4b58e] hover:bg-[#c4a37a] text-[#4a0a0c] px-6 sm:px-8 py-2 md:py-2.5 rounded-full text-sm font-bold tracking-widest transition-all hover:shadow-lg uppercase transform hover:-translate-y-0.5"
          >
            Home
          </button>
        </div>
      </div>
    </section>
  );
}
