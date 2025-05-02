import Image from 'next/image';
import clsx from 'clsx';

const LandingTopBg = () => {
  return (
    <>
      <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
        <Image
          src="/image/landing_top_pattern1.png"
          alt="PC 격자 패턴 이미지"
          width={1920}
          height={1080}
          className="laptop:block relative hidden object-cover"
        />
        <Image
          src="/image/landing_top_pattern2.png"
          alt="TABLET 격자 패턴 이미지"
          width={744}
          height={940}
          className="tablet:block laptop:hidden relative hidden object-cover"
        />
        <Image
          src="/image/landing_top_pattern3.png"
          alt="MOBILE 격자 패턴 이미지"
          width={375}
          height={640}
          className="tablet:hidden relative block object-cover"
        />
      </div>
      {/* 빛 이미지 */}
      <Image
        src="/image/landing_test2.png"
        alt="빛 일러스트"
        width={1920}
        height={500}
        className={clsx(
          'absolute',
          'laptop:bottom-[19%] tablet:bottom-[26%] bottom-[33%]',
          'object-contain',
          'mix-blend-hard-light backdrop-blur-[12px]'
        )}
      />
    </>
  );
};

export default LandingTopBg;
