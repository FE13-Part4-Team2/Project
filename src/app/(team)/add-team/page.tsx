'use client';

import { useState } from 'react';
import InputBase from '@/components/common/Input/InputBase';
import Button from '@/components/common/Button';
import IconRenderer from '@/components/common/Icons/IconRenderer';

export default function AddTeamPage() {
  const [teamName, setTeamName] = useState('');

  return (
    <div className="flex h-full w-full justify-center pt-50">
      <div className="tablet:text-lg-medium text-md-regular tablet:h-[460px] tablet:w-[456px] flex h-[374px] w-[343px] flex-col items-center">
        <h1 className="text-4xl-medium mb-8">팀 생성하기</h1>

        <div className="mb-8 flex cursor-pointer flex-col items-center self-start">
          <span className="mt-2">팀 프로필</span>

          <IconRenderer
            name="ProfileImageIcon"
            size={64}
            className="text-gray-400"
          />
        </div>

        <div className="mb-6 w-full self-start">
          <InputBase
            id="teamName"
            title="팀 이름"
            placeholder="팀 이름을 입력해주세요."
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            containerClassName="w-full"
            inputClassName="w-full"
          />
        </div>

        <div className="mb-4 w-full">
          <Button
            variant="primary"
            styleType="filled"
            size="md"
            className="text-lg-semibold w-full"
            onClick={() => {}}
            disabled={!teamName.trim()}
          >
            생성하기
          </Button>
        </div>

        <p className="tablet:text-lg-regular text-md-regular">
          팀 이름은 회사명이나 모임 이름 등으로 설정하면 좋아요.
        </p>
      </div>
    </div>
  );
}
