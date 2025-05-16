import Image from 'next/image';
import Button from '@/components/common/Button';

export default function NoTeamPage() {
  return (
    <div className="flex h-full max-h-[1080px] w-full flex-col items-center justify-center gap-20">
      <Image
        src="/image/no_team.png"
        alt="인부 3명이 아이템을 들고 가는 배경 일러스트"
        width={810}
        height={255}
        className="object-contain"
      />

      <div>
        <p className="laptop:text-lg-medium tablet:text-md-medium text-center text-slate-500">
          아직 소속된 팀이 없습니다.
          <br />
          팀을 생성하거나 팀에 참여해 보세요.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Button
          variant="primary"
          styleType="filled"
          radius="sm"
          className="text-lg-semibold h-[48px] w-[186px] text-white"
        >
          팀 생성하기
        </Button>
        <Button
          variant="secondary"
          styleType="outlined"
          radius="sm"
          className="text-lg-semibold h-[48px] w-[186px] text-green-700"
        >
          팀 참여하기
        </Button>
      </div>
    </div>
  );
}
