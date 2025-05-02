import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

const Smoke = ({ className }: { className?: string }) => {
  return (
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
        className,
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
  );
};

export default Smoke;
