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
        <LandingTitleText className="tablet:mt-22 laptop:mt-30 mt-12" />
        {/* 기차 모션 */}
        <Train
          className={clsx(
            'laptop:mt-30',
            'tablet:pl-0 tablet:mt-40',
            'mt-20 pl-20'
          )}
        />
        {/* 인부 모션 */}
        <Worker
          className={clsx(
            'z-5',
            'laptop:bottom-[13%] laptop:left-[36%]',
            'tablet:bottom-[20%] tablet:left-[27%]',
            'bottom-[27%] left-[14%]'
          )}
        />
        {/* 흙먼지 모션 */}
        <Smoke
          className={clsx(
            'tablet:block hidden',
            'laptop:bottom-[15%] laptop:left-[19%]',
            'tablet:left-0 tablet:bottom-[21%]'
          )}
        />
        {/* 지금 시작하기 버튼 */}
        <StartButton className="mt-20" />
      </div>
    </section>
  );
};

export default LandingTopSection;
