'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/app/(landing)/_components/MiddleSection/style';
import DummyHeader from '@/app/(landing)/_components/DummyHeader';
import LandingTopSection from '@/app/(landing)/_components/TopSection';
import LandingMiddleSection from '@/app/(landing)/_components/MiddleSection';
import LandingBottomSection from '@/app/(landing)/_components/BottomSection';
import StartButton from '@/app/(landing)/_components/StartButton';

export default function LandingPage() {
  return (
    <div className="h-full w-full flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <DummyHeader />
      </div>

      <LandingTopSection />

      <motion.div {...fadeInUp} className="flex justify-center">
        <StartButton className="tablet:mt-10 laptop:mt-0" />
      </motion.div>

      <LandingMiddleSection className="laptop::mt-45 tablet:mt-30 mt-12" />

      <LandingBottomSection />
    </div>
  );
}
