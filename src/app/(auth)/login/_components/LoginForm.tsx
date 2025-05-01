'use client';

import InputWithLabel from '@/app/(auth)/login/_components/InputWithLabel';
import Button from '@/components/common/Button';

export default function LoginForm() {
  const handleOpenModal = () => {
    // open password-find modal
  };

  const handleFormSubmit = () => {
    // form submit
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1 className="text-4xl-medium mb-20 text-center">로그인</h1>

      <div className="flex flex-col gap-6">
        <InputWithLabel inputType="email" autoComplete="email" />
        <InputWithLabel inputType="password" autoComplete="current-password" />
      </div>

      <div className="mt-3 mb-10 flex justify-end">
        <button
          className="leading-normal font-medium text-emerald-500 underline"
          onClick={handleOpenModal}
        >
          비밀번호를 잊으셨나요?
        </button>
      </div>

      <Button
        size="lg"
        variant="primary"
        styleType="filled"
        radius="sm"
        className="w-[460px]"
      >
        로그인
      </Button>
    </form>
  );
}
