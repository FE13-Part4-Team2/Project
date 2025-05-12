'use client';

import { useState } from 'react';
import InputBase from '@/components/common/Input/InputBase';
import Button from '@/components/common/Button';
import IconRenderer from '@/components/common/Icons/IconRenderer';

export default function AddTeamPage() {
  const [teamName, setTeamName] = useState('');

  const textClass = 'text-md-regular tablet:text-lg-regular';
  const rootClass = 'flex h-full w-full justify-center pt-50';
  const cardClass =
    'flex flex-col items-center w-[343px] h-[374px] tablet:w-[456px] tablet:h-[460px]';
  const profileClass = 'mb-6 self-start flex flex-col items-center gap-3';
  const inputWrapper = 'w-full mb-6 self-start';
  const buttonWrapper = 'w-full mb-4';

  return (
    <div className={rootClass}>
      <div className={`${cardClass} ${textClass}`}>
        <h1 className="text-2xl-medium laptop:text-4xl-medium mb-8">
          팀 생성하기
        </h1>

        <div className={profileClass}>
          <span className="text-lg-medium">팀 프로필</span>
          <IconRenderer
            name="ProfileEditIcon"
            size={64}
            className="cursor-pointer"
            onClick={() => {}}
          />
        </div>

        <div className={inputWrapper}>
          <InputBase
            id="teamName"
            title="팀 이름"
            placeholder="팀 이름을 입력해주세요."
            value={teamName}
            isInvalid={false}
            onChange={(e) => setTeamName(e.target.value)}
            titleClassName={`${textClass} mb-6`}
            containerClassName="w-full bg-slate-800"
            inputClassName={`${textClass} h-11 tablet:h-12`}
          />
        </div>

        <div className={buttonWrapper}>
          <Button
            variant="primary"
            styleType="filled"
            size="md"
            className="text-lg-semibold w-full"
            onClick={() => {}}
            disabled={!teamName.trim()}
            radius="sm"
          >
            생성하기
          </Button>
        </div>

        <p className={textClass}>
          팀 이름은 회사명이나 모임 이름 등으로 설정하면 좋아요.
        </p>
      </div>
    </div>
  );
}
