'use client';

import Image from 'next/image';
import clsx from 'clsx';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import { motion } from 'framer-motion';
import TextBounce from '@/components/Landing/TextBounce';

const LandingTopTest = () => {
  return (
    <section className="flex h-screen w-full flex-col items-center text-center">
      <div className="mt-20">
        <TextBounce />
        <h1 className="laptop:text-[48px] tablet:text-[40px] text-[24px] font-semibold">
          함께 만들어가는 투두 리스트
          <IconRenderer
            name="RepairIcon"
            className={clsx(
              'laptop:h-[56px] laptop:w-[56px] tablet:w-[48px] tablet:h-[48px] h-[28px] w-[28px]',
              'tablet:ml-[16px] ml-[4px] inline-block'
            )}
          />
        </h1>
        <h1
          className={clsx(
            'laptop:text-[64px] tablet:text-[48px] text-[32px] font-semibold',
            'bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent'
          )}
        >
          Coworkers
        </h1>
      </div>
      {/* 기차 모션 */}
      <div className="relative flex h-screen w-full flex-col items-center">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className=""
        >
          <Image
            src="/image/landing_test.png"
            alt="기차 일러스트"
            width={900}
            height={400}
            className="object-contain"
          />
        </motion.div>
        {/* 인부 모션 */}
        <motion.div // 최초 이동
          initial={{ x: '-150%' }}
          animate={{ x: '5%' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute bottom-[25%] left-[32%]"
        >
          <motion.div // 달리기
            animate={{ x: [0, -8, 0] }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <Image
              src="/image/landing_human.png"
              alt="인부 일러스트"
              width={142}
              height={149}
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        {/* 흙먼지 모션 */}
        <motion.div // 최초 이동
          initial={{ x: '-100%' }}
          animate={{ x: '5%' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute bottom-[25%] left-[17%]"
        >
          <motion.div // 일렁임
            initial={{ opacity: 0.5, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, x: [0, -8, 0] }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <Image
              src="/image/landing_smoke.png"
              alt="흙먼지 연기"
              width={255}
              height={110}
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingTopTest;
