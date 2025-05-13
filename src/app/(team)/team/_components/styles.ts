import clsx from 'clsx';

const RADIUS = 'rounded-[12px]';
const RADIUS_TL = 'rounded-tl-[12px]';
const RADIUS_BL = 'rounded-bl-[12px]';

// 팀 페이지 내부 아이템 공통 래퍼
export const teamItemWrapperStyle = clsx(
  'laptop:max-w-[1200px] tablet:max-w-[696px] max-w-[343px] min-w-0'
);

// 📌TeamBanner.tsx style
export const teamBannerWrapperStyle = clsx(
  'relative flex items-center justify-between p-6',
  teamItemWrapperStyle,
  'h-[64px] w-full',
  'border border-slate-50/10 bg-[#272e3f]',
  RADIUS
);

export const teamBannerImgStyle =
  'tablet:left-[75%] absolute left-1/2 -translate-x-1/2';

export const teamBannerTitleStyle = clsx(
  'text-xl-bold',
  'relative flex-1',
  'laptop:max-w-[800px] tablet:max-w-[460px] max-w-[245px]',
  'min-w-0'
);

// 📌TaskListBarList.tsx style
export const listContainerStyle = clsx(
  'flex flex-col',
  teamItemWrapperStyle,
  'w-full'
);

export const paginationStyle = clsx(
  'flex items-center justify-center',
  'size-4 rounded-full',
  'transition-colors duration-100'
);

// 📌TaskListBar.tsx style
export const taskListBarWrapperStyle = clsx(
  'flex items-center justify-between',
  teamItemWrapperStyle,
  'h-[40px] w-full',
  'bg-slate-800',
  RADIUS
);

export const taskListBarTitleStyle = clsx(
  'text-md-medium',
  'relative flex-1',
  'laptop:max-w-[800px] tablet:max-w-[460px] max-w-[255px]',
  'min-w-0'
);

export const colorList = ['#A855F7', '#3B82F6', '#06B6D4', '#EC4899'];

export const colorChipStyle = clsx('w-[12px] h-[40px]', RADIUS_TL, RADIUS_BL);

// 📌ProcessBadge.tsx style
export const processBadgeWrapperStyle = clsx(
  'h-[25px] w-[58px]',
  'bg-slate-900',
  RADIUS
);

// 📌Pagination.tsx style
export const getButtonStyle = (disabled: boolean) =>
  `${paginationStyle} ${disabled ? 'bg-slate-700' : 'bg-slate-800 hover:bg-slate-700'}`;

// 📌MemberList.tsx style
export const memberListContainerStyle = clsx(
  'flex flex-col',
  teamItemWrapperStyle,
  'w-full'
);

export const memberListWrapperStyle = clsx(
  'flex grid grid-cols-2 tablet:grid-cols-3 gap-3',
  teamItemWrapperStyle,
  'w-full'
);

// 📌MemberCard.tsx style
export const memberCardContainerStyle = clsx(
  'flex items-center justify-center',
  'laptop:w-[384px]',
  'tablet:w-[216px] tablet:h-[73px]',
  'w-[163.5px] h-[68px]',
  'bg-slate-800',
  'rounded-[16px]'
);

export const memberCardItemWrapperStyle = clsx(
  'flex items-center justify-between',
  'laptop:w-[336px] h-full',
  'tablet:w-[168px]',
  'w-[125px]'
);
