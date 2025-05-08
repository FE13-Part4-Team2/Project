'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import DropDown from '@/components/common/Dropdown';
import Skeleton from '@/components/common/Loading/Skeleton';
import { ROUTES } from '@/constants/routes';
import { useGroup } from '@/hooks/useGroup';
import {
  teamBannerWrapperStyle,
  teamBannerTitleStyle,
} from '@/app/(team)/team/_components/styles';

const TeamBanner = ({ groupId }: { groupId: number }) => {
  const router = useRouter();
  const { group, error } = useGroup(groupId);

  return (
    <>
      <div className={`${teamBannerWrapperStyle}`}>
        <Image
          src="/image/team_banner_pattern.svg"
          alt="팀 배너 배경 패턴 이미지"
          width={181}
          height={64}
          priority
          className="tablet:left-[75%] absolute left-1/2 -translate-x-1/2"
        />

        <div className={`${teamBannerTitleStyle}`}>
          {group ? group.name : error ? '팀 정보 로드 실패' : <Skeleton />}
        </div>

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
      </div>
    </>
  );
};

export default TeamBanner;
