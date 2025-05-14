'use client';

import InputWithLabel from '@/components/auth/InputWithLabel';
import Button from '@/components/common/Button';
import { useState } from 'react';

export default function ResetPasswordForm() {
  const [formErrors, setFormErrors] = useState<{
    email: string[] | undefined;
    password: string[] | undefined;
  }>({
    email: [],
    password: [],
  });

  const handleFormSubmit = () => {
    console.log('form submit');
    setFormErrors({
      email: [],
      password: [],
    });
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <h1 className="text-4xl-medium mb-20 text-center">비밀번호 재설정</h1>

      <div className="mb-10 flex flex-col gap-6">
        <InputWithLabel
          inputType="password"
          errorMessage={formErrors.email}
          mode="resetPasswordPage"
        />
        <InputWithLabel
          inputType="passwordConfirm"
          errorMessage={formErrors.password}
          mode="resetPasswordPage"
        />
      </div>

      <Button
        size="lg"
        variant="primary"
        styleType="filled"
        radius="sm"
        className="w-[460px]"
        disabled={false}
      >
        재설정
      </Button>
    </form>
  );
}
