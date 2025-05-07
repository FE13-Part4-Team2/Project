'use client';

import ForgotPasswordButton from '@/app/(auth)/login/_components/LoginForm/ForgotPasswordButton';
import InputWithLabel from '@/app/(auth)/login/_components/LoginForm/InputWithLabel';
import Button from '@/components/common/Button';

export default function LoginForm() {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // form submit logic here
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1 className="text-4xl-medium mb-20 text-center">로그인</h1>

      <div className="flex flex-col gap-6">
        <InputWithLabel inputType="email" />
        <InputWithLabel inputType="password" />
      </div>

      <ForgotPasswordButton />

      <Button
        size="lg"
        variant="primary"
        styleType="filled"
        radius="sm"
        className="w-[460px]"
        disabled={true} // 나중에 유효성 체크 후 해제
      >
        로그인
      </Button>
    </form>
  );
}
