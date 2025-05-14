// 팀 페이지: 리포트 섹션 스타일

import clsx from 'clsx';
import {
  teamItemWrapperStyle,
  RADIUS,
} from '@/app/(team)/team/_components/styles';

export const reportBannerContainerStyle = clsx(
  teamItemWrapperStyle,
  'laptop:h-[217px] h-[224px]',
  'bg-slate-800',
  RADIUS
);
