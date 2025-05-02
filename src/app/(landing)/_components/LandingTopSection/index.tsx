'use client';

import clsx from 'clsx';
import LandingTopBg from '@/app/(landing)/_components/LandingTopSection/LandingTopBg';
import LandingTitleText from '@/app/(landing)/_components/LandingTopSection/LandingTitleText';
import StartButton from '@/app/(landing)/_components/LandingTopSection/StartButton';
import Worker from '@/app/(landing)/_components/LandingTopSection/ItemWorker';
import Smoke from '@/app/(landing)/_components/LandingTopSection/ItemSmoke';
import Train from '@/app/(landing)/_components/LandingTopSection/ItemTrain';

const LandingTopSection = ({ className }: { className?: string }) => {
  return (
    <section
      className={`${className} relative flex h-screen w-full flex-col items-center text-center`}
    >
      <LandingTopBg />
      {/* 아이템 컨테이너 */}
      <div
        className={clsx(
          'relative flex flex-col items-center overflow-hidden',
          'laptop:h-[1080px] w-full',
          'tablet:h-[940px]',
          'h-[640px]'
        )}
      >
        <LandingTitleText className="mt-30" />
        {/* 기차 모션 */}
        <Train className="mt-15 pl-15" />
        {/* 인부 모션 */}
        <Worker />
        {/* 흙먼지 모션 */}
        <Smoke />
      </div>
      <StartButton />
    </section>
  );
};

export default LandingTopSection;
