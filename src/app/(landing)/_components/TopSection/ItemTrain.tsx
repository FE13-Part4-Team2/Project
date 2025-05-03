import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';
import { LANDING_IMAGE_URL } from '@/app/(landing)/_components/landingImageUrl';

const Train = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${className} laptop:-space-x-4.5 flex items-end -space-x-3`}
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
        className={clsx(
          'tablet:mb-6 relative z-3 mb-4',
          'laptop:w-[209px] laptop:h-[246px]',
          'tablet:w-[145px] tablet:h-[175px]',
          'h-[165px] w-[135px]'
        )}
      >
        <Image
          src={`${LANDING_IMAGE_URL}train_1.svg`}
          alt="기차 일러스트"
          fill
          className="object-contain"
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
        className={clsx(
          'relative z-2 mb-2',
          'laptop:w-[284px] laptop:h-[216px]',
          'tablet:w-[195px] tablet:h-[165px]',
          'h-[155px] w-[185px]'
        )}
      >
        <Image
          src={`${LANDING_IMAGE_URL}train_2.svg`}
          alt="기차 일러스트"
          fill
          className="object-contain"
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
        className={clsx(
          'relative z-1',
          'laptop:w-[382px] laptop:h-[362px]',
          'tablet:w-[280px] tablet:h-[265px]',
          'h-[255px] w-[270px]'
        )}
      >
        <Image
          src={`${LANDING_IMAGE_URL}train_3.svg`}
          alt="기차 일러스트"
          fill
          className="object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Train;
