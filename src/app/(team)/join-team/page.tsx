'use client';

import Button from '@/components/common/Button';
import InputBase from '@/components/common/Input/InputBase';

export default function JoinTeamPage() {
  const handleSubmit = () => {
    console.log('join team');
  };

  return (
    <div className="flex w-full justify-center pt-35">
      <div className="text-md-regular tablet:w-[456px] tablet:h-[460px] tablet:text-lg-regular flex h-[374px] w-[343px] flex-col items-center">
        <h1 className="text-2xl-medium laptop:text-4xl-medium tablet:mb-20 mb-6">
          팀 참여하기
        </h1>

        <div className="mb-10 w-full self-start">
          <InputBase
            id="teamName"
            title="팀 링크"
            placeholder="팀 링크를 입력해주세요."
            autoComplete="off"
            titleClassName="mb-6"
            containerClassName={`w-full bg-slate-800`}
            inputClassName="w-full h-11 tablet:h-12"
          />
        </div>
        <div className="mb-12 w-full">
          <Button
            variant="primary"
            styleType="filled"
            size="lg"
            radius="sm"
            className="text-lg-semibold w-full"
            onClick={handleSubmit}
          >
            참여하기
          </Button>
        </div>
        <p className="text-md-regular tablet:text-lg-regular">
          공유받은 팀 링크를 입력해 참여할 수 있어요.
        </p>
      </div>
    </div>
  );
}
