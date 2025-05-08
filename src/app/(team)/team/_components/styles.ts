import clsx from 'clsx';

export const teamBannerWrapperStyle = clsx(
  'relative flex items-center justify-between p-6',
  'laptop:max-w-[1200px] tablet:max-w-[696px] h-[64px] w-full max-w-[343px] min-w-0',
  'rounded-[12px] border border-slate-50/10 bg-[#272e3f]',
  'text-xl-bold'
);

export const teamBannerTitleStyle = clsx(
  'relative flex-1 overflow-x-auto whitespace-nowrap scrollbar-hide',
  'laptop:max-w-[800px] tablet:max-w-[460px] max-w-[250px]'
);

export const teamBannerTitleGradientStyle = clsx(
  'pointer-events-none absolute right-0 top-0',
  'h-full w-6 bg-gradient-to-l from-[#272e3f] to-transparent'
);
