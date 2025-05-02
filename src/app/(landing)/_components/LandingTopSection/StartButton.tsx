'use client';

import clsx from 'clsx';
import { useRouter } from 'next/router';

const StartButton = ({ className }: { className?: string }) => {
  const router = useRouter();

  return (
    <button
      className={clsx(
        'tablet:h-[48px] tablet:w-[373px]',
        'h-[45px] w-[343px]',
        'bg-gradient-to-r from-green-700 to-green-500',
        'rounded-[32px]',
        'text-lg-semibold text-white',
        className
      )}
    >
      지금 시작하기
    </button>
  );
};

export default StartButton;
