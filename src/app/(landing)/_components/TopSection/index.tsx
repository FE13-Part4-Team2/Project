'use client';
import clsx from 'clsx';
import LandingTopBg from '@/app/(landing)/_components/TopSection/LandingTopBg';
import LandingTopText from '@/app/(landing)/_components/TopSection/LandingTopText';
import Worker from '@/app/(landing)/_components/TopSection/Illustration/Worker';
import Smoke from '@/app/(landing)/_components/TopSection/Illustration/Smoke';
import Train from '@/app/(landing)/_components/TopSection/Illustration/Train';

const LandingTopSection = ({ className }: { className?: string }) => {
  return (
    <section
      className={`${className} flex w-full flex-col items-center text-center`}
    >
      {/* 배경 크기 고정용 컨테이너 */}
      <div
        className={clsx(
          'relative',
          'flex justify-center',
          'min-w-[1920px]',
          'max-w-none',
          'overflow-hidden'
        )}
      >
        <LandingTopBg className="relative z-1 flex" />
        <LandingTopText className="laptop:mt-33 tablet:mt-22.5 absolute z-10 mt-12" />

        {/* 아이템 컨테이너 */}
        <div
          className={clsx(
            'absolute',
            'flex flex-col',
            'laptop:h-[1080px] w-full',
            'tablet:h-[750px]',
            'h-[550px]'
          )}
        >
          {/* 기차 모션 */}
          <Train
            className={clsx(
              'absolute',
              'laptop:bottom-[32%] tablet:bottom-[16%] bottom-[19.5%]',
              'tablet:pl-0 pl-22'
            )}
          />
          {/* 인부 모션 */}
          <Worker
            className={clsx(
              'z-5',
              'laptop:bottom-[28%] laptop:left-[35%]',
              'tablet:bottom-[11%]',
              'bottom-[0%]'
            )}
          />
          {/* 흙먼지 모션 */}
          <Smoke
            className={clsx(
              'z-5',
              'tablet:block hidden',
              'laptop:bottom-[29%] laptop:left-[19%]',
              'tablet:left-0 tablet:bottom-[12%]'
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default LandingTopSection;
