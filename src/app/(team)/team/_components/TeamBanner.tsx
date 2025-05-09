'use client';
import Image from 'next/image';
import clsx from 'clsx';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import DropDown from '@/components/common/Dropdown';
import Skeleton from '@/components/common/Loading/Skeleton';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import { useGroup } from '@/hooks/useGroup';
import { useIsAdmin } from '@/hooks/useIsAdmin';
import {
  teamBannerWrapperStyle,
  teamBannerImgStyle,
  teamBannerTitleStyle,
  teamBannerTitleGradientStyle,
} from '@/app/(team)/team/_components/styles';
import { groupError } from '@/constants/errorMessage';

const TeamBanner = ({
  groupId,
  userId,
}: {
  groupId: number;
  userId: number;
}) => {
  const router = useRouter();
  const { group, error } = useGroup(groupId);
  const isAdmin = useIsAdmin({ membersData: group?.members, userId: userId });
  const [isScrollMove, setIsScrollMove] = useState(false); // 팀 이름 내부 스크롤 감지용

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollLeft } = e.currentTarget;
    setIsScrollMove(scrollLeft >= 10);
  };

  let content;
  if (group) content = group.name;
  else if (error) content = groupError;
  else content = <Skeleton width="240px" />;

  return (
    <>
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
          {content}
          <div
            className={clsx(
              'tablet:hidden block', // 모바일용: 긴 이름 끝에 그라데이션 적용(스크롤 기능 알림 목적)
              teamBannerTitleGradientStyle,
              isScrollMove && 'opacity-0' // 스크롤 10px 이동 시 그라데이션 제거
            )}
          />
        </div>

        {isAdmin && (
          <DropDown handleClose={() => {}}>
            <DropDown.Trigger className="mb-0">
              <IconRenderer name="GearIcon" className="cursor-pointer" />
            </DropDown.Trigger>
            <DropDown.Menu className="h-[80px] w-[120px]">
              <DropDown.Item
                onClick={() => router.push(ROUTES.TEAM_EDIT(groupId))}
                className="text-md-regular h-[39px] w-full"
              >
                수정하기
              </DropDown.Item>
              <DropDown.Item
                onClick={() => router.push(ROUTES.TEAM_EDIT(groupId))}
                className="text-md-regular h-[39px] w-full"
              >
                삭제하기
              </DropDown.Item>
            </DropDown.Menu>
          </DropDown>
        )}
      </div>
    </>
  );
};

export default TeamBanner;
