import clsx from 'clsx';

const RADIUS = 'rounded-[12px]';
const RADIUS_TL = 'rounded-tl-[12px]';
const RADIUS_BL = 'rounded-bl-[12px]';

export const teamItemWrapperStyle = clsx(
  'laptop:max-w-[1200px] tablet:max-w-[696px] max-w-[343px] min-w-0'
);

// 📌TeamBanner.tsx style
export const teamBannerWrapperStyle = clsx(
  'relative flex items-center justify-between p-6',
  teamItemWrapperStyle,
  'h-[64px] w-full',
  RADIUS,
  'border border-slate-50/10 bg-[#272e3f]'
);

export const teamBannerImgStyle =
  'tablet:left-[75%] absolute left-1/2 -translate-x-1/2';

export const teamBannerTitleStyle = clsx(
  'text-xl-bold',
  'relative flex-1',
  'laptop:max-w-[800px] tablet:max-w-[460px] max-w-[245px]'
);

// 📌TaskListBar.tsx style
export const taskListBarWrapperStyle = clsx(
  'flex items-center justify-between pr-4',
  teamItemWrapperStyle,
  'w-full h-[40px]',
  RADIUS,
  'bg-slate-800'
);

export const taskListBarTitleStyle = clsx(
  'text-md-medium',
  'laptop:max-w-[800px] tablet:max-w-[460px] max-w-[215px]'
);

export const colorList = ['#A855F7', '#3B82F6', '#06B6D4', '#EC4899'];

export const colorChipStyle = clsx('w-[12px] h-[40px]', RADIUS_TL, RADIUS_BL);

export const processBadgeWrapperStyle = clsx(
  'h-[25px] w-[58px]',
  RADIUS,
  'bg-slate-900'
);

// TaskListBarList.tsx style
export const listContainerStyle = clsx(
  'flex flex-col',
  'max-w-[343px] tablet:max-w-[696px] laptop:max-w-[1200px]',
  'w-full'
);
