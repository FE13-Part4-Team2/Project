'use client';

import LandingTopSection from '@/app/(landing)/_components/LandingTopSection';
import LandingMiddleSection from '@/app/(landing)/_components/LandingMiddleSection';
import LandingBottomSection from '@/app/(landing)/_components/LandingBottomSection';

export default function LandingPage() {
  return (
    <div className="flex h-screen w-full flex-col">
      <LandingTopSection />
      <LandingMiddleSection className="my-20" />
      <LandingBottomSection className="mb-20" />
    </div>
  );
}
