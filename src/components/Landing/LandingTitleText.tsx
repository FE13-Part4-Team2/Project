import { easeInOut, motion } from 'framer-motion';
import clsx from 'clsx';
import IconRenderer from '@/components/common/Icons/IconRenderer';

const text = '함께 만들어가는 투두 리스트';
const title = 'Coworkers';

export default function LandingTitleText() {
  return (
    <div className="flex flex-col">
      {/* 설명 행 */}
      <motion.div
        variants={container}
        animate="ani"
        className="flex flex-wrap items-center justify-center"
      >
        {/* 글자 */}
        {text.split('').map((char, index) =>
          char === ' ' ? (
            <span key={index} className="tablet:w-3 w-1.5" />
          ) : (
            <motion.span key={index} variants={child}>
              <h1 className="laptop:text-[48px] tablet:text-[40px] text-[24px] font-semibold">
                {char}
              </h1>
            </motion.span>
          )
        )}
        {/* 아이콘 */}
        <motion.span variants={child}>
          <IconRenderer
            name="RepairIcon"
            className={clsx(
              'laptop:h-[56px] laptop:w-[56px] tablet:w-[48px] tablet:h-[48px] h-[28px] w-[28px]',
              'tablet:ml-[16px] ml-[4px] inline-block'
            )}
          />
        </motion.span>
      </motion.div>

      {/* 제목 행 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{
          duration: 0.5,
          delay: text.length * 0.04,
          ease: easeInOut,
        }}
        className="flex flex-wrap items-center justify-center"
      >
        {' '}
        <h1
          className={clsx(
            'laptop:text-[64px] tablet:text-[48px] text-[32px] font-semibold',
            'bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent'
          )}
        >
          {title}
        </h1>
      </motion.div>
    </div>
  );
}

const container = {
  ani: {
    transition: {
      staggerChildren: 0.03, // 글자 등장 간격
    },
  },
};

const child = {
  ani: { y: [0, -20, 0] },
};
