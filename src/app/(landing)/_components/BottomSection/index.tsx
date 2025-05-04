import LandingBottomBg from '@/app/(landing)/_components/BottomSection/LandingBottomBg';
import { LandingBottomText } from '@/app/(landing)/_components/BottomSection/LandingBottomText';
import Workers from '@/app/(landing)/_components/BottomSection/Workers';

const LandingBottomSection = ({ className }: { className?: string }) => {
  return (
    <section
      className={`${className} relative flex h-screen w-full flex-col items-center text-center`}
    >
      <LandingBottomBg className="relative flex" />
      <LandingBottomText className="absolute mt-55" />
      <Workers className="laptop:mt-138 laptop:mr-120 tablet:mt-152 tablet:mr-100 absolute mt-90 mr-90" />
    </section>
  );
};

export default LandingBottomSection;
