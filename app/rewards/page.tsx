import React from 'react';
import { RewardsDashboard } from '../../components/rewards/RewardsDashboard';

export default function RewardsPage() {
  return (
    <div className="w-full min-h-screen bg-[#1E110E] flex flex-col overflow-x-hidden pt-6">
      <main className="flex-grow flex flex-col">
        <RewardsDashboard />
      </main>
    </div>
  );
}
