import Image from 'next/image';
import clsx from 'clsx';

const LandingTopBg = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="absolute top-0 z-10 flex h-full w-full items-center justify-center overflow-hidden">
        <Image
          src="/image/landing_top_pattern1.png"
          alt="PC 격자 패턴 이미지"
          width={1920}
          height={1080}
          className="laptop:block absolute top-0 hidden object-none"
        />
        <Image
          src="/image/landing_top_pattern2.png"
          alt="TABLET 격자 패턴 이미지"
          width={744}
          height={940}
          className="tablet:block laptop:hidden absolute top-0 hidden object-none"
        />
        <Image
          src="/image/landing_top_pattern3.png"
          alt="MOBILE 격자 패턴 이미지"
          width={375}
          height={640}
          className="tablet:hidden absolute top-0 block object-none"
        />
      </div>
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
    </div>
  );
};

export default LandingTopBg;
