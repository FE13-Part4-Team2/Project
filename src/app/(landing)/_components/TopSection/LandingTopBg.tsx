import Image from 'next/image';

const LandingTopBg = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="absolute top-0 z-1 flex h-full w-full items-center justify-center overflow-hidden">
        <Image
          src="/image/landing_top_pattern_l.png"
          alt="PC 격자 패턴 이미지"
          width={1920}
          height={1080}
          className="laptop:block absolute top-0 hidden object-none"
        />
        <Image
          src="/image/landing_top_pattern_m.png"
          alt="TABLET 격자 패턴 이미지"
          width={744}
          height={940}
          className="tablet:block laptop:hidden absolute top-0 hidden object-none"
        />
        <Image
          src="/image/landing_top_pattern_s.png"
          alt="MOBILE 격자 패턴 이미지"
          width={375}
          height={640}
          className="tablet:hidden absolute top-0 block object-none"
        />
      </div>
    </div>
  );
};

export default LandingTopBg;
