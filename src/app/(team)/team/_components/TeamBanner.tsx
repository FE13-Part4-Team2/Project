'use client';
import Image from 'next/image';
import clsx from 'clsx';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import DropDown from '@/components/common/Dropdown';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useIsAdmin } from '@/hooks/useIsAdmin';
import { GroupResponse } from '@/lib/apis/group/type';
import { ROUTES } from '@/constants/routes';
import {
  teamBannerWrapperStyle,
  teamBannerImgStyle,
  teamBannerTitleStyle,
  teamBannerTitleGradientStyle,
} from '@/app/(team)/team/_components/styles';

const TeamBanner = ({
  group,
  userId,
}: {
  group: GroupResponse;
  userId: number;
}) => {
  const router = useRouter();
  const isAdmin = useIsAdmin({ membersData: group.members, userId });
  const [isScrollMove, setIsScrollMove] = useState(false); // 팀 이름 내부 스크롤 감지용

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollLeft } = e.currentTarget;
    setIsScrollMove(scrollLeft >= 10);
  };

  return (
    <div className={`${teamBannerWrapperStyle}`}>
      <Image
        src="/image/team_banner_pattern.svg"
        alt="팀 배너 배경 패턴 이미지"
        width={181}
        height={64}
        priority
        className={`${teamBannerImgStyle}`}
      />

      <div onScroll={handleScroll} className={`${teamBannerTitleStyle}`}>
        {group.name}
        <div
          className={clsx(
            'tablet:hidden block', // 모바일용: 긴 이름 끝에 그라데이션 적용(스크롤 기능 알림 목적)
            teamBannerTitleGradientStyle,
            isScrollMove && 'opacity-0' // 스크롤 10px 이동 시 그라데이션 제거
          )}
        />
      </div>

      {isAdmin && (
        <DropDown>
          <DropDown.Trigger className="mb-0">
            <IconRenderer name="GearIcon" className="cursor-pointer" />
          </DropDown.Trigger>
          <DropDown.Menu className="h-[80px] w-[120px]">
            <DropDown.Item
              onClick={() => router.push(ROUTES.TEAM_EDIT(group.id))}
              className="text-md-regular h-[39px] w-full"
            >
              수정하기
            </DropDown.Item>
            <DropDown.Item
              onClick={() => router.push(ROUTES.TEAM_EDIT(group.id))}
              className="text-md-regular h-[39px] w-full"
            >
              삭제하기
            </DropDown.Item>
          </DropDown.Menu>
        </DropDown>
      )}
    </div>
  );
};

export default TeamBanner;
