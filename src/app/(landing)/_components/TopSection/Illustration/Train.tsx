import { motion } from 'framer-motion';
import clsx from 'clsx';
import { LANDING_IMAGE_URL } from '@/app/(landing)/_components/landingImageUrl';

const Train = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${className} laptop:w-full laptop:-space-x-5 flex items-end justify-center -space-x-4`}
    >
      {/* 기차1 */}
      <motion.div
        animate={{ rotate: [0, -5, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1.7,
        }}
        className="laptop:mb-10 tablet:mb-5 z-3 mb-5.5"
      >
        <img
          src={`${LANDING_IMAGE_URL}train_1.svg`}
          alt="기차 일러스트"
          className={clsx(
            'laptop:w-[209px] laptop:h-[246px]',
            'tablet:w-[145px] tablet:h-[175px]',
            'h-[165px] w-[135px]'
          )}
        />
      </motion.div>

      {/* 기차2 */}
      <motion.div
        animate={{ rotate: [0, 5, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1.7,
        }}
        className="laptop:mb-6 tablet:mb-1.5 z-2 mb-2"
      >
        <img
          src={`${LANDING_IMAGE_URL}train_2.svg`}
          alt="기차 일러스트"
          className={clsx(
            'laptop:w-[284px] laptop:h-[216px]',
            'tablet:w-[195px] tablet:h-[165px]',
            'h-[155px] w-[185px]',
            'object-contain'
          )}
        />
      </motion.div>

      {/* 기차3 */}
      <motion.div
        animate={{ rotate: [0, -5, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1.7,
        }}
        className="z-1"
      >
        <img
          src={`${LANDING_IMAGE_URL}train_3.svg`}
          alt="기차 일러스트"
          className={clsx(
            'laptop:w-[420px] laptop:h-[400px]',
            'tablet:w-[280px] tablet:h-[265px]',
            'h-[255px] w-[270px]',
            'object-contain'
          )}
        />
      </motion.div>
    </div>
  );
};

export default Train;
