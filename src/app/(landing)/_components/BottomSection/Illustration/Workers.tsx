'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { LANDING_IMAGE_URL } from '@/app/(landing)/_components/landingImageUrl';

const Workers = ({ className }: { className?: string }) => {
  const [isFirstFrame, setIsFirstFrame] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstFrame((prev) => !prev);
    }, 400); // 프레임 변경 간격

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${className} flex w-full justify-center`}>
      {/* 인부1 */}
      <motion.div
        initial={{ left: 0 }}
        animate={{ x: 150, y: [0, 5, 0] }}
        transition={{
          duration: 1.5,
          ease: 'easeOut',
          repeat: Infinity,
        }}
      >
        <img
          src={
            isFirstFrame
              ? `${LANDING_IMAGE_URL}workers1.svg`
              : `${LANDING_IMAGE_URL}workers2_01.svg`
          }
          alt="걷는 인부"
          className={clsx(
            'laptop:w-[152px] laptop:h-[225px]',
            'tablet:w-[120px] tablet:h-[178px]',
            'h-[93px] w-[62.5px]',
            'object-contain'
          )}
        />
      </motion.div>

      {/* 인부2 */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 150, y: [0, -5, 0] }}
        transition={{
          duration: 1.5,
          ease: 'easeOut',
          repeat: Infinity,
        }}
      >
        <img
          src={
            isFirstFrame
              ? `${LANDING_IMAGE_URL}workers2.svg`
              : `${LANDING_IMAGE_URL}workers3_01.svg`
          }
          alt="걷는 인부"
          className={clsx(
            'laptop:w-[152px] laptop:h-[225px]',
            'tablet:w-[120px] tablet:h-[178px]',
            'h-[93px] w-[62.5px]',
            'object-contain'
          )}
        />
      </motion.div>

      {/* 인부3 */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 150, y: [0, 5, 0] }}
        transition={{
          duration: 1.5,
          ease: 'easeOut',
          repeat: Infinity,
        }}
      >
        <img
          src={
            isFirstFrame
              ? `${LANDING_IMAGE_URL}workers3.svg`
              : `${LANDING_IMAGE_URL}workers1_01.svg`
          }
          alt="걷는 인부"
          className={clsx(
            'laptop:w-[152px] laptop:h-[225px]',
            'tablet:w-[120px] tablet:h-[178px]',
            'h-[93px] w-[62.5px]',
            'object-contain'
          )}
        />
      </motion.div>
    </div>
  );
};

export default Workers;
