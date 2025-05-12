'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import clientFetcher from '@/lib/client/fetcher.client';
import InputBase from '@/components/common/Input/InputBase';
import Button from '@/components/common/Button';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import { postGroup } from '@/lib/apis/group';
import { UserGroupResponse } from '@/lib/apis/user/type';

export default function AddTeamPage() {
  const router = useRouter();
  const [teamName, setTeamName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [existingNames, setExistingNames] = useState<string[]>([]);

  useEffect(() => {
    async function fetchMyGroups() {
      try {
        const data = await clientFetcher<undefined, UserGroupResponse[]>({
          url: '/user/groups',
          method: 'GET',
        });
        if (data) {
          setExistingNames(data.map((g) => g.name));
        }
      } catch (e) {
        console.error('내 그룹 조회 실패:', e);
      }
    }
    fetchMyGroups();
  }, []);

  const handleProfileClick = () => {};

  const handleCreate = async () => {
    let hasErr = false;

    if (existingNames.includes(teamName.trim())) {
      setNameError(true);
      hasErr = true;
    }
    if (hasErr) return;

    try {
      const newGroup = await postGroup({ body: { name: teamName } });
      if (newGroup?.id) {
        router.push(`/team/${newGroup.id}`);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : '팀 생성 실패';
      console.error('팀 생성 실패:', message);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCreate();
    }
  };

  return (
    <div className="flex h-full w-full justify-center pt-50">
      <div className="tablet:w-[456px] tablet:h-[460px] text-md-regular tablet:text-lg-regular flex h-[374px] w-[343px] flex-col items-center">
        <h1 className="text-2xl-medium laptop:text-4xl-medium tablet:mb-20 mb-6">
          팀 생성하기
        </h1>

        <div className="mb-6 flex flex-col gap-3 self-start">
          <span className="text-lg-medium">팀 프로필</span>

          <IconRenderer
            name="ProfileEditIcon"
            size={64}
            className="cursor-pointer text-gray-400"
            onClick={handleProfileClick}
          />
        </div>

        <div className="mb-6 w-full self-start">
          <InputBase
            id="teamName"
            title="팀 이름"
            placeholder="팀 이름을 입력해주세요."
            value={teamName}
            isInvalid={nameError}
            onChange={(e) => {
              setTeamName(e.target.value);
              setNameError(false);
            }}
            onKeyDown={handleKeyDown}
            titleClassName="mb-6"
            containerClassName={
              `w-full bg-slate-800 ` +
              (nameError ? 'border border-red-500' : '')
            }
            inputClassName="w-full h-11 tablet:h-12"
          />
          {nameError && (
            <p className="text-md-medium mt-2 text-red-500">
              이미 존재하는 이름입니다.
            </p>
          )}
        </div>

        <div className="mb-4 w-full">
          <Button
            variant="primary"
            styleType="filled"
            size="lg"
            radius="sm"
            className="text-lg-semibold w-full"
            onClick={handleCreate}
            disabled={teamName.length === 0}
          >
            생성하기
          </Button>
        </div>

        <p className="text-md-regular tablet:text-lg-regular">
          팀 이름은 회사명이나 모임 이름 등으로 설정하면 좋아요.
        </p>
      </div>
    </div>
  );
}
