'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { LANDING_IMAGE_URL } from '@/app/(landing)/_components/landingImageUrl';

const Workers = ({ className }: { className?: string }) => {
  const [isFirstFrame, setIsFirstFrame] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstFrame((prev) => !prev);
    }, 350); // 250ms 간격으로 프레임 변경 (4fps)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${className} h-full w-full overflow-hidden`}>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        transition={{
          duration: 1,
          ease: 'easeOut',
          repeat: Infinity,
        }}
      >
        <Image
          src={
            isFirstFrame
              ? `${LANDING_IMAGE_URL}wokers1.svg`
              : `${LANDING_IMAGE_URL}wokers1_01.svg`
          }
          alt="걷는 인부"
          width={152}
          height={225}
          className="object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Workers;
