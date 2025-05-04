'use client';

import LandingTopSection from '@/app/(landing)/_components/TopSection';
import LandingMiddleSection from '@/app/(landing)/_components/MiddleSection';
import LandingBottomSection from '@/app/(landing)/_components/BottomSection';
import StartButton from '@/app/(landing)/_components/StartButton';

export default function LandingPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center">
      <LandingTopSection />
      {/* 지금 시작하기 버튼 */}
      <div>
        <StartButton />
      </div>
      <LandingMiddleSection className="mt-40" />
      <LandingBottomSection />
    </div>
  );
}
