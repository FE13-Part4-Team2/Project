import Image from 'next/image';
import clsx from 'clsx';
import IconRenderer from '@/components/common/Icons/IconRenderer';

const title = '경영관리팀';

const TeamBanner = () => {
  return (
    <div
      className={clsx(
        'relative flex items-center justify-between p-6',
        'laptop:w-[1200px]',
        'tablet:w-[696px]',
        'h-[64px] w-[343px]',
        'rounded-[12px] border border-slate-50/10 bg-[#272e3f]',
        'text-xl-bold'
      )}
    >
      <Image
        src="/image/team_banner_pattern.svg"
        alt="팀 배너 배경 패턴 이미지"
        width={181}
        height={64}
        className="tablet:left-[75%] absolute left-1/2 -translate-x-1/2"
      />
      {title}
      <IconRenderer name="GearIcon" />
    </div>
  );
};

export default TeamBanner;
