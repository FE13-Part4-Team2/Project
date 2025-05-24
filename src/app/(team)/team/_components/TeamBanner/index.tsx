'use client';
import Image from 'next/image';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import GradientScrollable from '@/components/common/Scroll/GradientScrollable';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import { useIsAdmin } from '@/hooks/useIsAdmin';
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
  const router = useRouter();
  const isAdmin = useIsAdmin({ membersData: group.members, userId });

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

      {isAdmin && (
        <IconRenderer
          onClick={() => router.push(ROUTES.TEAM_EDIT(group.id))}
          name="GearIcon"
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default TeamBanner;
