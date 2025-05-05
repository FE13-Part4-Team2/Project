import clsx from 'clsx';
import LandingBottomBg from '@/app/(landing)/_components/BottomSection/LandingBottomBg';
import { LandingBottomText } from '@/app/(landing)/_components/BottomSection/LandingBottomText';
import Workers from '@/app/(landing)/_components/BottomSection/Workers';

const LandingBottomSection = ({ className }: { className?: string }) => {
  return (
    <section
      className={`${className} relative flex w-full flex-col items-center text-center`}
    >
      <LandingBottomBg className="relative flex" />
      <LandingBottomText className="laptop:mt-55 tablet:mt-45 absolute mt-25" />
      <Workers
        className={clsx(
          'absolute',
          'laptop:mt-138 laptop:mr-120',
          'tablet:mt-122 tablet:mr-100',
          'mt-90 mr-90'
        )}
      />
    </section>
  );
};

export default LandingBottomSection;
