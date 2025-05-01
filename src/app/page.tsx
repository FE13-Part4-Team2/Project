'use client';

import LandingTopSection from '@/app/(landing)/_components/LandingTopSection';
import LandingMiddleSection from '@/app/(landing)/_components/LandingMiddleSection';

export default function LandingPage() {
  return (
    <div className="flex h-screen w-full flex-col">
      <LandingTopSection />
      <LandingMiddleSection />
    </div>
  );
}
