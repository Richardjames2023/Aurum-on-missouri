import React from 'react';
import { DealsRowGrid } from '../../components/deals/DealsRowGrid';

export default function DealsPage() {
  return (
    <div className="w-full min-h-screen bg-[#343434] flex flex-col overflow-x-hidden">
      <main className="flex-grow flex flex-col pt-6">
        <DealsRowGrid />
      </main>
    </div>
  );
}
