'use client';

import ForgotPasswordButton from '@/app/(auth)/login/_components/LoginForm/ForgotPasswordButton';
import InputWithLabel from '@/app/(auth)/login/_components/LoginForm/InputWithLabel';
import Button from '@/components/common/Button';
import { validateEmail, validatePassword } from '@/utils/inputValidation';
import { useEffect, useState } from 'react';
import { z } from 'zod';

// auth schema : define schema outside the component
const auth = z.object({
  email: z
    .string()
    .nonempty({ message: '이메일은 필수 입력입니다.' })
    .refine(validateEmail, {
      message: '올바른 이메일 형식이 아닙니다.',
    }),

  password: z
    .string()
    .nonempty({ message: '비밀번호는 필수 입력입니다.' })
    .refine(validatePassword, {
      message:
        '비밀번호는 영문, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.',
    }),
});

export default function LoginForm() {
  const [formValues, setFormValues] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    // handling validation with Zod
    // returns new object
    const result = auth.safeParse({ formValues });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setFormErrors({
        email: fieldErrors.email?.[0] || '',
        password: fieldErrors.password?.[0] || '',
      });
      return;
    }
  }, [formValues]);

  // update form values
  const handleInputChange =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // form submit logic here
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1 className="text-4xl-medium mb-20 text-center">로그인</h1>

      <div className="flex flex-col gap-6">
        <InputWithLabel
          inputType="email"
          errorMessage={formErrors.email}
          onInputChange={handleInputChange}
        />
        <InputWithLabel
          inputType="password"
          errorMessage={formErrors.password}
          onInputChange={handleInputChange}
        />
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
