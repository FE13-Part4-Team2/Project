'use client';
import Image from 'next/image';
import clsx from 'clsx';
import LandingTopBg from '@/app/(landing)/_components/TopSection/LandingTopBg';
import LandingTitleText from '@/app/(landing)/_components/TopSection/LandingTitleText';
import Worker from '@/app/(landing)/_components/TopSection/ItemWorker';
import Smoke from '@/app/(landing)/_components/TopSection/ItemSmoke';
import Train from '@/app/(landing)/_components/TopSection/ItemTrain';

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
          'tablet:h-[750px]',
          'h-[550px]'
        )}
      >
        <LandingTitleText className="tablet:mt-22 laptop:mt-30 z-10 mt-12" />
        {/* 빛 이미지 */}
        <Image
          src="/image/landing_light.png"
          alt="빛 일러스트"
          width={1920}
          height={485}
          className={clsx(
            'absolute items-center justify-center',
            'laptop:bottom-[15%] tablet:bottom-[27%] bottom-[33%]',
            'object-none',
            'mix-blend-hard-light backdrop-blur-[12px]'
          )}
        />
        {/* 기차 모션 */}
        <Train
          className={clsx(
            'laptop:mt-20',
            'tablet:pl-0 tablet:mt-37',
            'mt-20 pl-22'
          )}
        />
        {/* 인부 모션 */}
        <Worker
          className={clsx(
            'z-5',
            'laptop:bottom-[17%] laptop:left-[36%]',
            'tablet:bottom-[12%] tablet:left-[25%]',
            'bottom-[10%] left-[15%]'
          )}
        />
        {/* 흙먼지 모션 */}
        <Smoke
          className={clsx(
            'tablet:block z-5 hidden',
            'laptop:bottom-[18%] laptop:left-[19%]',
            'tablet:left-0 tablet:bottom-[13%]'
          )}
        />
      </div>
    </section>
  );
};

export default LandingTopSection;
