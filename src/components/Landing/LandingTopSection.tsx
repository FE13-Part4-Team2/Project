import Image from 'next/image';
import clsx from 'clsx';
import IconRenderer from '@/components/common/Icons/IconRenderer';

const LandingTopSection = () => {
  return (
    <section className="flex h-screen w-full flex-col items-center text-center">
      <Image
        src="/image/landing_train.png"
        alt="메인 기차 이미지"
        fill
        className="object-cover"
      />
      <div className="mt-20">
        <h1 className="laptop:text-[48px] tablet:text-[40px] text-[24px] font-semibold">
          함께 만들어가는 투두 리스트
          <IconRenderer
            name="RepairIcon"
            className={clsx(
              'laptop:h-[56px] laptop:w-[56px] tablet:w-[48px] tablet:h-[48px] h-[28px] w-[28px]',
              'tablet:ml-[16px] ml-[4px] inline-block'
            )}
          />
        </h1>
        <h1
          className={clsx(
            'laptop:text-[64px] tablet:text-[48px] text-[32px] font-semibold',
            'bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent'
          )}
        >
          Coworkers
        </h1>
      </div>
    </section>
  );
};

export default LandingTopSection;
