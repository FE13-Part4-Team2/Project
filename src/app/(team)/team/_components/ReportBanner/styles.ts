// 팀 페이지: 리포트 섹션 스타일

import clsx from 'clsx';
import {
  teamItemWrapperStyle,
  RADIUS,
} from '@/app/(team)/team/_components/styles';

// 📌ReportBanner.tsx style
export const reportBannerContainerStyle = clsx(
  teamItemWrapperStyle,
  'laptop:h-[217px] h-[224px]',
  'bg-slate-800',
  RADIUS
);

// 📌ReportCard.tsx style
export const reportCardContainerStyle = clsx(
  'laptop:max-w-[400px] tablet:max-w-[280px] max-w-[142px]',
  'laptop:h-[76.5px] h-[80px] w-full min-w-0',
  'bg-slate-700',
  RADIUS
);
