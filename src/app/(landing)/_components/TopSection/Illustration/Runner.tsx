import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';
import { LANDING_IMAGE_URL } from '@/app/(landing)/_components/landingImageUrl';
import { DELAY_TIME } from '@/app/(landing)/_components/TopSection/Illustration/delayTime';

const Runner = ({ className }: { className?: string }) => {
  return (
    <motion.div // 달리기
      animate={{ x: [0, -8, 0] }}
      transition={{
        duration: 1,
        ease: 'easeOut',
        repeat: Infinity,
        repeatType: 'reverse',
        delay: DELAY_TIME,
      }}
      className={clsx(
        className,
        'absolute',
        'laptop:w-[142px] laptop:h-[149px]',
        'tablet:w-[100px] tablet:h-[105px]',
        'h-[94px] w-[90px]'
      )}
    >
      <Image
        src={`${LANDING_IMAGE_URL}runner.svg`}
        alt="인부 일러스트"
        fill
        className="object-contain"
      />
    </motion.div>
  );
};

export default Runner;
