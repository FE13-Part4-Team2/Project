import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

const Worker = ({ className }: { className?: string }) => {
  return (
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
        className,
        'absolute',
        'laptop:w-[142px] laptop:h-[149px]',
        'tablet:w-[93px] tablet:h-[98px]',
        'h-[94px] w-[90px]'
      )}
    >
      <Image
        src="/image/landing_worker.svg"
        alt="인부 일러스트"
        fill
        className="object-contain"
      />
    </motion.div>
  );
};

export default Worker;
