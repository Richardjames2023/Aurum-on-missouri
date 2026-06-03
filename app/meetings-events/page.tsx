"use client"; 
import React from "react";
import { MeetingHero } from "../../components/meeting/MeetingHero";
import { MeetingPerksGrid } from "../../components/meeting/MeetingPerksGrid";
import { MeetingCoreValues } from "../../components/meeting/MeetingCoreValues";
import { MeetingChoiceGrid } from "../../components/meeting/MeetingChoiceGrid";


export default function MeetingsPage() {

  return (
    <div className="w-full min-h-screen bg-white flex flex-col overflow-x-hidden">
      {/* Core visual layout block stack execution timeline */}
      <main className="flex-grow flex flex-col">
        <MeetingHero />
      
        <MeetingPerksGrid />

        <MeetingChoiceGrid />

        {/* Brought back cleanly with absolute module resolutions */}
        <MeetingCoreValues />

      </main>
    </div>
  );
}
