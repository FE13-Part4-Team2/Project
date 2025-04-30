'use client';

import InputWithLabel from '@/app/(auth)/login/_components/InputWithLabel';
import Button from '@/components/common/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  const handleOpenModal = () => {
    console.log('modal open');
  };
  return (
    <div className="flex min-h-screen items-center justify-center">
      <form>
        <h1 className="text-4xl-medium mb-20 text-center">로그인</h1>

        <div className="flex flex-col gap-6">
          <InputWithLabel />
          <InputWithLabel />
        </div>

        <div className="mt-3 mb-10 flex justify-end">
          <button onClick={handleOpenModal}>비밀번호를 잊으셨나요?</button>
        </div>

        <Button
          size="lg"
          variant="primary"
          styleType="filled"
          className="w-[460px]"
        >
          로그인
        </Button>

        <div className="mt-6 flex justify-center gap-3">
          <span>아직 계정이 없으신가요?</span>
          <Link href={'/signup'} className="text-green-700">
            가입하기
          </Link>
        </div>

        <div className="flex items-center justify-between border">
          <span>간편 로그인하기</span>
          {/*카카오톡 아이콘*/}
          <button>
            <Image
              src="/icon/kakao_icon.svg"
              alt="kakao"
              width={42}
              height={42}
            />
          </button>
        </div>
      </form>
    </div>
  );
}
