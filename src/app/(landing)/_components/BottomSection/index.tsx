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
      <Workers className="absolute mt-140 mr-120 flex justify-center" />
    </section>
  );
};

export default LandingBottomSection;
