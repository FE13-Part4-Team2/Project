'use client';

import { useState } from 'react';
import InputBase from '@/components/common/Input/InputBase';
import Button from '@/components/common/Button';
import { INVITATION_ERROR_MAP } from '@/utils/errorMap';

export interface JoinTeamFormProps {
  onSubmit: (link: string) => void | Promise<void>;
}

export default function JoinTeamForm({ onSubmit }: JoinTeamFormProps) {
  const [link, setLink] = useState('');
  const [error, setError] = useState<string>('');

  const isValidLink = (value: string) => {
    const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/;
    return jwtRegex.test(value.trim());
  };

  const handleSubmit = async () => {
    setError('');
    if (!isValidLink(link)) {
      setError('유효한 링크가 아닙니다.');
      return;
    }
    try {
      await onSubmit(link.trim());
    } catch (err: unknown) {
      const raw = err instanceof Error ? err.message : '';
      setError(
        INVITATION_ERROR_MAP[raw] ?? '초대 수락 중 오류가 발생했습니다.'
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="text-md-regular tablet:w-[460px] tablet:text-lg-regular flex w-[343px] flex-col items-center">
      <h1 className="text-2xl-medium laptop:text-4xl-medium tablet:mb-20 mb-6">
        팀 참여하기
      </h1>
      <div className="mb-10 w-full self-start">
        <InputBase
          id="teamLink"
          title="팀 링크"
          placeholder="팀 링크를 입력해주세요."
          value={link}
          isInvalid={Boolean(error)}
          onChange={(e) => {
            setLink(e.target.value);
            setError('');
          }}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          titleClassName="mb-3"
          containerClassName="h-11 tablet:h-12ll  bg-slate-800"
          inputClassName="w-full h-11 tablet:h-12"
        />
        {error && <p className="text-md-medium mt-2 text-red-500">{error}</p>}
      </div>
      <div className="mb-6 w-full">
        <Button
          variant="primary"
          styleType="filled"
          size="lg"
          radius="sm"
          className="text-lg-semibold w-full"
          onClick={handleSubmit}
          disabled={!link.trim()}
        >
          참여하기
        </Button>
      </div>
      <p className="text-md-regular tablet:text-lg-regular">
        공유받은 팀 링크를 입력해 참여할 수 있어요.
      </p>
    </div>
  );
}
