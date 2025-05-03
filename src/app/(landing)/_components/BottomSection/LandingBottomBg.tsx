import Image from 'next/image';
import { LANDING_IMAGE_URL } from '@/app/(landing)/_components/landingImageUrl';

const LandingBottomBg = ({ className }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      {/* 격자 패턴 배경 */}
      <Image
        src={`${LANDING_IMAGE_URL}landing_bottom_bg_l.png`}
        alt="PC 격자 패턴 이미지"
        width={1920}
        height={1080}
        className="laptop:block hidden object-none"
      />
    </div>
  );
};

export default LandingBottomBg;
