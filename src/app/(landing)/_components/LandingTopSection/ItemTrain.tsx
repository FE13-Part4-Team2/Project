import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

const Train = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${className} laptop:-space-x-4.5 tablet:-space-x-3 flex items-end -space-x-2`}
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
          'tablet:w-[130px] tablet:h-[155px]',
          'h-[155px] w-[126px]'
        )}
      >
        <Image
          src="/image/train_1.svg"
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
          'tablet:w-[180px] tablet:h-[150px]',
          'h-[145px] w-[175px]'
        )}
      >
        <Image
          src="/image/train_2.svg"
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
          'tablet:w-[250px] tablet:h-[237px]',
          'h-[228px] w-[240px]'
        )}
      >
        <Image
          src="/image/train_3.svg"
          alt="기차 일러스트"
          fill
          className="object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Train;
