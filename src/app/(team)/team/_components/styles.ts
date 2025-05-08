import clsx from 'clsx';

export const teamBannerWrapperStyle = clsx(
  'relative flex items-center justify-between p-6',
  'laptop:max-w-[1200px] tablet:max-w-[696px] h-[64px] w-full max-w-[343px] min-w-0',
  'rounded-[12px] border border-slate-50/10 bg-[#272e3f]',
  'text-xl-bold'
);

export const teamBannerTitleStyle = clsx(
  'flex-1 truncate shrink-0',
  'laptop:max-w-[800px] tablet:max-w-[460px] max-w-[250px]'
);
