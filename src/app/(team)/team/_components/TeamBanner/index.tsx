'use client';
import Image from 'next/image';
import TeamBannerMenu from '@/app/(team)/team/_components/TeamBanner/TeamBannerMenu';
import GradientScrollable from '@/components/common/Scroll/GradientScrollable';
import { GroupResponse } from '@/lib/apis/group/type';
import {
  teamBannerWrapperStyle,
  teamBannerImgStyle,
  teamBannerTitleStyle,
} from '@/app/(team)/team/_components/TeamBanner/styles';

const TeamBanner = ({
  group,
  userId,
}: {
  group: GroupResponse;
  userId: number;
}) => {
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

      <div className={`${teamBannerTitleStyle}`}>
        <GradientScrollable>{group.name}</GradientScrollable>
      </div>

      <TeamBannerMenu group={group} userId={userId} />
    </div>
  );
};

export default TeamBanner;
