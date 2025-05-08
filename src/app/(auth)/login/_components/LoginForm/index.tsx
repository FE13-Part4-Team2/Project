'use client';

import ForgotPasswordButton from '@/app/(auth)/login/_components/LoginForm/ForgotPasswordButton';
import InputWithLabel from '@/app/(auth)/login/_components/LoginForm/InputWithLabel';
import Button from '@/components/common/Button';
import { validateEmail, validatePassword } from '@/utils/inputValidation';
import { useEffect, useState } from 'react';
import { z } from 'zod';

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

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // form submit logic here
  };

  const handleInputChange =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues((prev) => ({ ...prev, [key]: e.target.value }));
    };

  // auth schema
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

  // handling validation with Zod
  const result = auth.safeParse({ formValues });

  useEffect(() => {
    // 스키마의 필드에서 에러 메시지를 꺼내서 formErrors 상태 업데이트
    if (!result.success) {
      // 실패 정보가 담긴 zodError 객체를 flatten( ) 으로 보기좋게 정리, 필드별 에러 메시지만 꺼냄
      const fieldErrors = result.error.flatten().fieldErrors;
      // 필드별 첫번째 에러 메시지를 꺼내서, 상태로 저장
      setFormErrors({
        email: fieldErrors.email?.[0] || '',
        password: fieldErrors.password?.[0] || '',
      });
      return;
    }
  }, [result.error, result.success]);

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
