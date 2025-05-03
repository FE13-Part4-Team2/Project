'use client';
import clsx from 'clsx';
import DummyHeader from '@/app/(landing)/_components/TopSection/DummyHeader';
import LandingTopBg from '@/app/(landing)/_components/TopSection/LandingTopBg';
import LandingTitleText from '@/app/(landing)/_components/TopSection/LandingTitleText';
import Worker from '@/app/(landing)/_components/TopSection/ItemWorker';
import Smoke from '@/app/(landing)/_components/TopSection/ItemSmoke';
import Train from '@/app/(landing)/_components/TopSection/ItemTrain';

const LandingTopSection = ({ className }: { className?: string }) => {
  return (
    <section
      className={`${className} flex h-screen w-full flex-col items-center text-center`}
    >
      <div className="w-full">
        <DummyHeader />
      </div>

      <LandingTopBg className="relative z-1 flex" />
      <LandingTitleText className="laptop:mt-33 tablet:mt-37 absolute z-10 mt-27" />

      {/* 아이템 컨테이너 */}
      <div
        className={clsx(
          'flex flex-col items-center justify-center overflow-hidden',
          'laptop:h-[1080px] w-full',
          'tablet:h-[750px]',
          'h-[550px]'
        )}
      >
        {/* 기차 모션 */}
        <Train
          className={clsx(
            'absolute',
            'laptop:bottom-[17%] tablet:bottom-[19%] bottom-[37%]',
            'tablet:pl-0',
            'mt-20'
          )}
        />
        {/* 인부 모션 */}
        <Worker
          className={clsx(
            'z-5',
            'laptop:bottom-[11%] laptop:left-[35.5%]',
            'tablet:bottom-[15%] tablet:left-[24%]',
            'bottom-[27%] left-[15%]'
          )}
        />
        {/* 흙먼지 모션 */}
        <Smoke
          className={clsx(
            'tablet:block z-5 hidden',
            'laptop:bottom-[12%] laptop:left-[19%]',
            'tablet:left-0 tablet:bottom-[16%]'
          )}
        />
      </div>
    </section>
  );
};

export default LandingTopSection;
