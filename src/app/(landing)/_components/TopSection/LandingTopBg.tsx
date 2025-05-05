import Image from 'next/image';
import { LANDING_IMAGE_URL } from '@/app/(landing)/_components/landingImageUrl';

const LandingTopBg = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${className} laptop:max-w-full tablet:max-w-[744px] w-full max-w-[375px] min-w-0`}
    >
      {/* 격자 패턴 배경 */}
      <Image
        src={`${LANDING_IMAGE_URL}landing_top_bg_l.png`}
        alt="PC 격자 패턴 이미지"
        width={1920}
        height={1080}
        className="laptop:block top-0 hidden overflow-hidden"
      />
      <Image
        src={`${LANDING_IMAGE_URL}landing_top_bg_m.png`}
        alt="TABLET 격자 패턴 이미지"
        width={744}
        height={940}
        className="tablet:block laptop:hidden top-0 hidden overflow-hidden"
      />
      <Image
        src={`${LANDING_IMAGE_URL}landing_top_bg_s.png`}
        alt="MOBILE 격자 패턴 이미지"
        width={375}
        height={640}
        className="tablet:hidden top-0 block overflow-hidden"
      />
    </div>
  );
};

export default LandingTopBg;
