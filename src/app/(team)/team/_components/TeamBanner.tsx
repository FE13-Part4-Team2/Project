'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import clsx from 'clsx';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import DropDown from '@/components/common/Dropdown';
import { ROUTES } from '@/constants/routes';
import { getGroupById } from '@/lib/apis/group';
import { GroupResponse } from '@/lib/apis/group/type';

const TeamBanner = ({ groupId }: { groupId: number }) => {
  const router = useRouter();
  const [team, setTeam] = useState<GroupResponse | null>(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await getGroupById({ groupId });
        setTeam(res);
      } catch (error) {
        console.error('팀 정보 가져오기 실패', error);
      }
    };

    fetchTeam();
  }, [groupId]);

  return (
    <>
      <div
        className={clsx(
          'relative flex items-center justify-between p-6',
          'laptop:w-[1200px] tablet:w-[696px] h-[64px] w-[343px]',
          'rounded-[12px] border border-slate-50/10 bg-[#272e3f]',
          'text-xl-bold'
        )}
      >
        <Image
          src="/image/team_banner_pattern.svg"
          alt="팀 배너 배경 패턴 이미지"
          width={181}
          height={64}
          priority
          className="tablet:left-[75%] absolute left-1/2 -translate-x-1/2"
        />
        {team ? team.name : '로딩 중...'}
        <DropDown handleClose={() => {}}>
          <DropDown.Trigger>
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
