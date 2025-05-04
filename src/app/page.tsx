'use client';

import LandingTopSection from '@/app/(landing)/_components/TopSection';
import LandingMiddleSection from '@/app/(landing)/_components/MiddleSection';
import LandingBottomSection from '@/app/(landing)/_components/BottomSection';

export default function LandingPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center">
      <LandingTopSection />
      <LandingMiddleSection className="mt-40" />
      <LandingBottomSection />
    </div>
  );
}
