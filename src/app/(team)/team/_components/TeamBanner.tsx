'use client';
import Image from 'next/image';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import DropDown from '@/components/common/Dropdown';
import GradientScrollable from '@/components/common/Scroll/GradientScrollable';
import { useRouter } from 'next/navigation';
import { useIsAdmin } from '@/hooks/useIsAdmin';
import { GroupResponse } from '@/lib/apis/group/type';
import { ROUTES } from '@/constants/routes';
import {
  teamBannerWrapperStyle,
  teamBannerImgStyle,
  teamBannerTitleStyle,
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
