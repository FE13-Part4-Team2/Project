import { easeInOut, motion } from 'framer-motion';
import clsx from 'clsx';
import IconRenderer from '@/components/common/Icons/IconRenderer';

const text = '함께 만들어가는 투두 리스트';

export default function TextBounce() {
  return (
    <motion.div
      variants={container}
      initial="start"
      animate="end"
      className="flex flex-wrap items-center justify-center"
    >
      {/* 글자 */}
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={child}>
          <h1 className="laptop:text-[48px] tablet:text-[40px] text-[24px] font-semibold">
            {char}
          </h1>
        </motion.span>
      ))}
      {/* 아이콘 */}
      <motion.div
        initial={{ y: 10 }}
        animate={{ y: 0, rotate: [0, 360] }}
        transition={{
          duration: 0.5,
          delay: text.length * 0.04,
          ease: easeInOut,
        }}
      >
        <IconRenderer
          name="RepairIcon"
          className={clsx(
            'laptop:h-[56px] laptop:w-[56px] tablet:w-[48px] tablet:h-[48px] h-[28px] w-[28px]',
            'tablet:ml-[16px] ml-[4px] inline-block'
          )}
        />
      </motion.div>
    </motion.div>
  );
}

const container = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.03, // 글자 등장 간격
    },
  },
};

const child = {
  start: { y: 10 },
  end: { y: 0 },
};
