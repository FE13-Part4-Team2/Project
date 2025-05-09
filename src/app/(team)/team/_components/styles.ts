import clsx from 'clsx';

const RADIUS = 'rounded-[12px]';

// 📌TeamBanner.tsx style
export const teamBannerWrapperStyle = clsx(
  'relative flex items-center justify-between p-6',
  'laptop:max-w-[1200px] tablet:max-w-[696px] max-w-[343px] min-w-0',
  'h-[64px] w-full',
  RADIUS,
  'border border-slate-50/10 bg-[#272e3f]',
  'text-xl-bold'
);

export const teamBannerImgStyle =
  'tablet:left-[75%] absolute left-1/2 -translate-x-1/2';

export const teamBannerTitleStyle = clsx(
  'relative flex-1 overflow-x-auto whitespace-nowrap scrollbar-hide',
  'laptop:max-w-[800px] tablet:max-w-[460px] max-w-[250px]'
);

export const teamBannerTitleGradientStyle = clsx(
  'pointer-events-none absolute right-0 top-0',
  'h-full w-6 bg-gradient-to-l from-[#272e3f] to-transparent'
);

// 📌TaskListBar.tsx style
export const taskListBarWrapperStyle = clsx(
  'flex items-center justify-between px-4',
  'max-w-[343px] tablet:max-w-[696px] laptop:max-w-[1200px]',
  'w-full h-[40px]',
  RADIUS,
  'bg-slate-800',
  'text-md-medium'
);

export const ProcessBadgeWrapperStyle = clsx(
  'h-[25px] w-[58px]',
  RADIUS,
  'bg-slate-900'
);
