'use client';

import DummyHeader from '@/app/(landing)/_components/DummyHeader';
import LandingTopSection from '@/app/(landing)/_components/TopSection';
// import LandingMiddleSection from '@/app/(landing)/_components/MiddleSection';
// import LandingBottomSection from '@/app/(landing)/_components/BottomSection';

export default function LandingPage() {
  return (
    <div className="h-full w-full flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <DummyHeader />
      </div>
      <LandingTopSection />
    </div>
  );
}
