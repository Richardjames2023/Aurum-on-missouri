"use client";

import { useState } from "react";
import RoomCard, { RoomData } from "../../components/RoomCard";
import RoomDetailModal from "../../components/RoomDetailModal";
import SubNav from "../../components/SubNav";
import Image from "next/image";
import Link from "next/link";
import {
  LuSnowflake,
  LuTv,
  LuWifi,
  LuPhone,
  LuCoffee,
  LuWine,
  LuBaby,
  LuRefrigerator
} from "react-icons/lu";
import {
  FaBanSmoking,
  FaDroplet,
  FaWheelchair,
  FaUserShield,
  FaShower,
  FaVault
} from "react-icons/fa6";


export default function RoomsPage() {

  const [selectedRoom, setSelectedRoom] = useState<RoomData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = (room: RoomData) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

  // const dummyDesc = "These rooms offer ample space with stylish décor and relaxing tones that allow you to feel at ease. After a restful night's sleep on your plush mattress, wake up to a refreshing rain shower with thoughtful bathroom amenities. During your stay, appreciate picturesque skyline views of the city from the comfort of your room. Unwind in the evening with your preferred entertainment on the flat-screen TV. Keep connected with our free Wi-Fi and share memorable moments.";

  const rooms: RoomData[] = [
    {
      title: "Standard Room",
      description: "Every detail here is designed to make calm feel luxurious. The décor is soft, neutral, and unpretentious. Perfect for solo travellers, business guests, or couples who appreciate simplicity done well.",
      images: ["/img/STANDARD-.webp", "/img/STANDARD--2.webp", "/img/STANDARD--38.webp"],
      specs: ["23 m²", "2 adults", "1 king or 2 twin"],
      amenities: [
        { icon: FaDroplet, label: "Complimentary Water" },
        { icon: LuTv, label: "Smart TV" },
        { icon: LuWifi, label: "High-Speed Wi-Fi" },
        { icon: LuCoffee, label: "Coffee Maker" },
        { icon: LuWine, label: "Mini Bar" },
        { icon: LuRefrigerator, label: "Fridge" },
        
      ],
    },
    {
      title: "Executive (one bedroom)",
      description: "Sophistication is not merely in what you see. It is also about how you feel. The Black Onyx is a one-bedroom suite ideal choice for those who appreciate a private, well-appointed space that feels like a true home away from home.",
      images: ["/img/ANNEXEXEC-18.webp", "/img/ANNEXEXEC-8.webp", "/img/ANNEXEXEC-13.webp"],
      specs: ["23 m²", "2 adults", "1 king or 2 twin"],
      amenities: [
        { icon: FaDroplet, label: "Complimentary Water" },
        { icon: LuTv, label: "Smart TV" },
        { icon: LuWifi, label: "High-Speed Wi-Fi" },
        { icon: LuCoffee, label: "Coffee Maker" },
        { icon: LuWine, label: "Mini Bar" },
        { icon: LuRefrigerator, label: "Fridge" },
      ],
    },
    {
      title: "Super deluxe (one bedroom)",
      description: "Sophistication is not merely in what you see. It is also about how you feel. The Black Onyx is a one-bedroom suite ideal choice for those who appreciate a private, well-appointed space that feels like a true home away from home.",
      images: ["/img/SUPER-DELUXE-25.webp", "/img/SUPER-DELUXE-9.webp", "/img/SUPER-DELUXE-18.webp"],
      specs: ["27 m²", "3 adults", "1 king or 2 twin"],
      amenities: [
        { icon: FaDroplet, label: "Complimentary Water" },
        { icon: LuTv, label: "Smart TV" },
        { icon: LuWifi, label: "High-Speed Wi-Fi" },
        { icon: LuCoffee, label: "Coffee Maker" },
        { icon: LuWine, label: "Mini Bar" },
        { icon: LuRefrigerator, label: "Fridge" },
      ],
    },
    {
      title: "Deluxe room (big studio)",
      description: "Perfect if you crave space, style, and serenity. Here you are guaranteed to simply enjoy the calm that makes Aurum",
      images: ["/img/DELUXE--14.webp", "/img/DELUXE.webp", "/img/DELUXE--10.webp"],
      specs: ["27 m²", "3 adults", "1 king or 2 twin"],
      amenities: [
        { icon: FaDroplet, label: "Complimentary Water" },
        { icon: LuTv, label: "Smart TV" },
        { icon: LuWifi, label: "High-Speed Wi-Fi" },
        { icon: LuCoffee, label: "Coffee Maker" },
        { icon: LuWine, label: "Mini Bar" },
        { icon: LuRefrigerator, label: "Fridge" },
      ],
    },
  ];

    const handleBooking = () => {
    alert("Booking action triggered!");
  };

  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden relative">

      {/* Title Section */}
      <section className="bg-[#f4f5f7] py-6 sm:py-8 lg:py-10 w-full">
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2d3748] tracking-tight">
           Premium Accommodation in Maitama, Abuja
          </h1>
        </div>
      </section>

      {/* Hero Showcase Split Content Section */}
      <section className="w-full flex flex-col lg:grid lg:grid-cols-5 bg-white border-b border-gray-100">
        <div className="w-full lg:col-span-3 grid grid-cols-2 grid-rows-2 gap-1 h-[400px] md:h-[500px] lg:h-[600px]">
          <div className="relative row-span-2 col-span-1 h-full w-full bg-gray-200 overflow-hidden group cursor-pointer">
            <Image
              src="/img/DELUXE--14.webp"
              alt="Azusa Premier Royal Suite Main"
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
          <div className="relative row-span-1 col-span-1 h-full w-full bg-gray-200 overflow-hidden group cursor-pointer">
            <Image
              src="/img/DELUXE.webp"
              alt="Suite Bed View Side"
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 50vw, 20vw"
            />
          </div>
          <div className="relative row-span-1 col-span-1 h-full w-full bg-gray-200 overflow-hidden group cursor-pointer">
            <Image
              src="/img/AURUM_-54.webp"
              alt="Suite Bed View Front"
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 50vw, 20vw"
            />
          </div>
        </div>

        {/* Right Info Section Block Panel */}
        <div className="w-full lg:col-span-2 p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start bg-[#FCFBF9]">
          <span className="text-[10px] font-extrabold text-[#4A0A15] tracking-[0.25em] uppercase block mb-3">
            Elite Sanctuary Living
          </span>
          <h2 className="text-2xl md:text-3xl font-normal text-stone-900 font-serif tracking-tight leading-tight mb-4">
            A brand-new level of modern sophistication
          </h2>
          <p className="text-gray-600 text-xs md:text-sm font-medium leading-relaxed tracking-wide mb-6">
            Our luxury suites provide space, privacy, and curated workspace parameters tailored perfectly for executives or private travellers visiting Abuja. Enjoy customized amenities and premium bedding systems.
          </p>
          <div className="w-full h-[1px] bg-gray-200 mb-6" />
          <div className="flex flex-col space-y-1">
            <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest">Pricing Structure</span>
            <div className="flex items-baseline space-x-1.5">
              <span className="text-2xl font-black text-[#4A0A15]">₦120,000</span>
              <span className="text-xs text-gray-400 font-bold">/ night starting rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Navigation Bar */}
       <SubNav />

      {/* Main Suite Matrix Cards Grid Section */}
      <section className="w-full py-16 px-4 sm:px-8 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col">
          <div className="mb-12 border-b border-gray-100 pb-4">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900 tracking-tight">
              Select Your Accommodation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((roomItem, idx) => (
              <RoomCard
                key={idx}
                room={roomItem}
                /* WIRED: Hooks click parameter callback straight to state functions */
                onReadMore={() => handleOpenModal(roomItem)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* {MOdal popup} */}
      <RoomDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        room={selectedRoom}
      />
    </main>
  );
}
