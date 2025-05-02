'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import LandingTopBg from '@/app/(landing)/_components/LandingTopSection/LandingTopBg';
import LandingTitleText from '@/app/(landing)/_components/LandingTopSection/LandingTitleText';
import StartButton from '@/app/(landing)/_components/LandingTopSection/startButton';

const LandingTopSection = ({ className }: { className?: string }) => {
  return (
    <section
      className={`${className} relative flex h-screen w-full flex-col items-center text-center`}
    >
      <LandingTopBg />
      {/* 아이템 컨테이너 */}
      <div
        className={clsx(
          'relative flex flex-col items-center overflow-hidden',
          'laptop:h-[1080px] w-full',
          'tablet:h-[940px]',
          'h-[640px]'
        )}
      >
        <LandingTitleText className="mt-19" />
        {/* 기차 모션 */}
        <motion.div
          animate={{ y: [0, -9, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 1.7,
          }}
          className={clsx(
            'absolute bottom-[20%]',
            'laptop:w-[906px] laptop:h-[400px]',
            'tablet:w-[590px] tablet:h-[252px]',
            'h-[243px] w-[569px]'
          )}
        >
          <Image
            src="/image/landing_test.png"
            alt="기차 일러스트"
            fill
            className="object-contain"
          />
        </motion.div>
        {/* 인부 모션 */}
        <motion.div // 달리기
          animate={{ x: [0, -8, 0] }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 1.7,
          }}
          className={clsx(
            'absolute bottom-[15%] left-[34%]',
            'laptop:w-[142px] laptop:h-[149px]',
            'tablet:w-[93px] tablet:h-[98px]',
            'h-[94px] w-[90px]'
          )}
        >
          <Image
            src="/image/landing_human.png"
            alt="인부 일러스트"
            fill
            className="object-contain"
          />
        </motion.div>
        {/* 흙먼지 모션 */}
        <motion.div // 일렁임
          initial={{ opacity: 0.5, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, x: [0, -8, 0] }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 1.7,
          }}
          className={clsx(
            'tablet:block hidden',
            'absolute bottom-[15%] left-[19%]',
            'laptop:w-[255px] laptop:h-[110px]',
            'tablet:w-[166px] tablet:h-[71px]'
          )}
        >
          <Image
            src="/image/landing_smoke.png"
            alt="흙먼지 연기"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
      <StartButton className="z-20" />
    </section>
  );
};

export default LandingTopSection;
