'use client';
import clsx from 'clsx';
import DummyHeader from '@/app/(landing)/_components/TopSection/DummyHeader';
import LandingTopBg from '@/app/(landing)/_components/TopSection/LandingTopBg';
import LandingTopText from '@/app/(landing)/_components/TopSection/LandingTopText';
import Worker from '@/app/(landing)/_components/TopSection/Illustration/Worker';
import Smoke from '@/app/(landing)/_components/TopSection/Illustration/Smoke';
import Train from '@/app/(landing)/_components/TopSection/Illustration/Train';

const LandingTopSection = ({ className }: { className?: string }) => {
  return (
    <section
      className={`${className} flex h-screen w-full flex-col items-center text-center`}
    >
      <div className="w-full">
        <DummyHeader />
      </div>

      <LandingTopBg className="relative z-1 flex" />
      <LandingTopText className="laptop:mt-33 tablet:mt-37 absolute z-10 mt-27" />

      {/* 아이템 컨테이너 */}
      <div
        className={clsx(
          'absolute',
          'flex flex-col items-center justify-center overflow-hidden',
          'laptop:h-[1080px] w-full',
          'tablet:h-[750px]',
          'h-[550px]'
        )}
      >
        {/* 기차 모션 */}
        <Train
          className={clsx(
            'absolute overflow-hidden',
            'laptop:bottom-[26%] tablet:bottom-[8%] bottom-[8%]',
            'tablet:pl-0'
          )}
        />
        {/* 인부 모션 */}
        <Worker
          className={clsx(
            'z-5',
            'laptop:bottom-[22%] laptop:left-[35%]',
            'tablet:bottom-[3.5%] tablet:left-[24%]',
            'bottom-[4%] left-[15%]'
          )}
        />
        {/* 흙먼지 모션 */}
        <Smoke
          className={clsx(
            'z-5',
            'tablet:block hidden',
            'laptop:bottom-[23%] laptop:left-[19%]',
            'tablet:left-0 tablet:bottom-[5%]'
          )}
        />
      </div>
    </section>
  );
};

export default LandingTopSection;
