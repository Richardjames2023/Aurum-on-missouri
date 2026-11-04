"use client";

import { useState } from "react";
import RoomCard, { RoomData } from "../../components/RoomCard";
import RoomDetailModal from "../../components/RoomDetailModal";
import SubNav from "../../components/SubNav";
import Image from "next/image";
import {
  LuTv,
  LuWifi,
  LuCoffee,
  LuWine,
  LuRefrigerator,
  LuSparkles
} from "react-icons/lu";
import {
  FaDroplet
} from "react-icons/fa6";

export default function RoomsPageClient() {
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

  // Rooms in order from cheapest to most expensive with verified pricing, size & amenities
  const rooms: RoomData[] = [
    {
      title: "Standard Room",
      pricePerNight: 120000,
      currency: "NGN",
      description: "Every detail here is designed to make calm feel luxurious. Soft, neutral, and unpretentious interiors suited to solo travellers and couples exploring Abuja.",
      images: ["/img/STANDARD-.webp", "/img/STANDARD--2.webp", "/img/STANDARD--38.webp"],
      specs: ["23 m²", "2 adults", "1 king or 2 twin"],
      amenities: [
        { icon: LuWifi, label: "Wi-Fi" },
        { icon: LuCoffee, label: "Breakfast" },
        { icon: LuSparkles, label: "Designed interiors" },
        { icon: FaDroplet, label: "Suited to solo travellers" },
        { icon: LuTv, label: "Smart TV" },
        { icon: LuRefrigerator, label: "Fridge" },
      ],
    },
    {
      title: "Deluxe Room (Studio)",
      pricePerNight: 200000,
      currency: "NGN",
      description: "Generous space and radiant aesthetics. A big-studio layout with plush bedding, dedicated workspace, and refined comforts.",
      images: ["/img/DELUXE--14.webp", "/img/DELUXE.webp", "/img/DELUXE--10.webp"],
      specs: ["32 m²", "2 adults", "1 king"],
      amenities: [
        { icon: LuWifi, label: "Wi-Fi" },
        { icon: LuCoffee, label: "Breakfast" },
        { icon: LuSparkles, label: "More space" },
        { icon: LuTv, label: "Smart TV" },
        { icon: LuWine, label: "Mini Bar" },
      ],
    },
    {
      title: "Super Deluxe Room (One Bedroom)",
      pricePerNight: 250000,
      currency: "NGN",
      description: "A sophisticated one-bedroom layout tailored for guests seeking expansive privacy and contemporary architectural elegance.",
      images: ["/img/SUPER-DELUXE-25.webp", "/img/SUPER-DELUXE-9.webp", "/img/SUPER-DELUXE-18.webp"],
      specs: ["48 m²", "3 adults", "1 king"],
      amenities: [
        { icon: LuWifi, label: "Wi-Fi" },
        { icon: LuCoffee, label: "Breakfast" },
        { icon: LuSparkles, label: "Sophisticated design" },
        { icon: LuTv, label: "Smart TV" },
        { icon: LuRefrigerator, label: "Fridge" },
      ],
    },
    {
      title: "Executive Room (One Bedroom)",
      pricePerNight: 300000,
      currency: "NGN",
      description: "Our signature, most spacious one-bedroom suite with radiant, detailed interiors, private living salon, and refined VIP amenities.",
      images: ["/img/ANNEXEXEC-18.webp", "/img/ANNEXEXEC-8.webp", "/img/ANNEXEXEC-13.webp"],
      specs: ["65 m²", "3 adults", "1 king"],
      amenities: [
        { icon: LuWifi, label: "Wi-Fi" },
        { icon: LuCoffee, label: "Breakfast" },
        { icon: LuSparkles, label: "Spacious one-bedroom layout" },
        { icon: LuTv, label: "Smart TV" },
        { icon: LuWine, label: "Mini Bar" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden relative">

      {/* Title Section */}
      <section className="bg-[#f4f5f7] py-6 sm:py-8 lg:py-10 w-full">
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2d3748] tracking-tight font-serif">
            Rooms and Rates
          </h1>
        </div>
      </section>

      {/* Hero Showcase Split Content Section */}
      <section className="w-full flex flex-col lg:grid lg:grid-cols-5 bg-white border-b border-gray-100">
        <div className="w-full lg:col-span-3 grid grid-cols-2 grid-rows-2 gap-1 h-[400px] md:h-[500px] lg:h-[600px]">
          <div className="relative row-span-2 col-span-1 h-full w-full bg-gray-200 overflow-hidden group cursor-pointer">
            <Image
              src="/img/DELUXE--14.webp"
              alt="Executive Room at Aurum on Missouri"
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
          <div className="relative row-span-1 col-span-1 h-full w-full bg-gray-200 overflow-hidden group cursor-pointer">
            <Image
              src="/img/DELUXE.webp"
              alt="Deluxe Room Interior"
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 50vw, 20vw"
            />
          </div>
          <div className="relative row-span-1 col-span-1 h-full w-full bg-gray-200 overflow-hidden group cursor-pointer">
            <Image
              src="/img/AURUM_-54.webp"
              alt="Lobby & Suite Details"
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 50vw, 20vw"
            />
          </div>
        </div>

        {/* Right Info Section Block Panel */}
        <div className="w-full lg:col-span-2 p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start bg-[#ffffff]">
          <span className="text-[10px] font-extrabold text-[#343434] tracking-[0.25em] uppercase block mb-3">
            Four room types. One signature Aurum feeling.
          </span>
          <h2 className="text-2xl md:text-3xl font-normal text-stone-900 font-serif tracking-tight leading-tight mb-4">
            A brand-new level of modern sophistication
          </h2>
          <p className="text-gray-600 text-xs md:text-sm font-medium leading-relaxed tracking-wide mb-6">
            Our luxury suites provide space, privacy, and curated workspace parameters tailored perfectly for executives or private travellers visiting Abuja. Enjoy customised amenities and premium bedding systems.
          </p>
          <div className="w-full h-[1px] bg-gray-200 mb-6" />
          <div className="flex flex-col space-y-1">
            <span className="text-2xl font-black text-[#343434]">From ₦129,000 per night, incl. VAT</span>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {rooms.map((roomItem, idx) => (
              <RoomCard
                key={idx}
                room={roomItem}
                onReadMore={() => handleOpenModal(roomItem)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal popup */}
      <RoomDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        room={selectedRoom}
      />
    </main>
  );
}

