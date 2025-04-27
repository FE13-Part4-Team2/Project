'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import LandingTitleText from '@/components/Landing/LandingTitleText';

const LandingTopSection = () => {
  return (
    <section className="flex h-screen w-full flex-col items-center text-center">
      <div className="mt-20">
        <LandingTitleText />
      </div>
      <div className="relative flex h-screen w-full flex-col items-center">
        {/* 빛 이미지 */}
        <Image
          src="/image/landing_test2.png"
          alt="빛 일러스트"
          width={1920}
          height={500}
          className="object-contain mix-blend-hard-light backdrop-blur-[12px]"
        />
        {/* 기차 모션 */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 1.5,
          }}
          className="absolute"
        >
          <Image
            src="/image/landing_test.png"
            alt="기차 일러스트"
            width={906}
            height={400}
            className="object-contain"
          />
        </motion.div>
        {/* 인부 모션 */}
        <motion.div // 달리기
          animate={{ x: [0, -8, 0] }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 1.5,
          }}
          className="absolute bottom-[25%] left-[32%]"
        >
          <Image
            src="/image/landing_human.png"
            alt="인부 일러스트"
            width={142}
            height={149}
            className="object-contain"
          />
        </motion.div>
        {/* 흙먼지 모션 */}
        <motion.div // 일렁임
          initial={{ opacity: 0.5, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, x: [0, -8, 0] }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 1.5,
          }}
          className="absolute bottom-[25%] left-[17%]"
        >
          <Image
            src="/image/landing_smoke.png"
            alt="흙먼지 연기"
            width={255}
            height={110}
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LandingTopSection;
