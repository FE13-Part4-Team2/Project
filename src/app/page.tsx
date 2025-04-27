'use client';

import LandingTopSection from '@/components/Landing/LandingTopSection';
import LandingMiddleSection from '@/components/Landing/LandingMiddleSection';

export default function LandingPage() {
  return (
    <div className="flex h-screen w-full flex-col">
      <LandingTopSection />
      <LandingMiddleSection />
    </div>
  );
}
