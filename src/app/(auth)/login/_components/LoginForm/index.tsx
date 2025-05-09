'use client';

import ForgotPasswordButton from '@/app/(auth)/login/_components/LoginForm/ForgotPasswordButton';
import InputWithLabel from '@/app/(auth)/login/_components/LoginForm/InputWithLabel';
import Button from '@/components/common/Button';
import { signIn } from '@/lib/apis/auth';
import { validateEmail, validatePassword } from '@/utils/inputValidation';
import { useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import { z } from 'zod';

// schema
const inputEmptySchema = z.object({
  email: z.string().nonempty({ message: '이메일은 필수 입력입니다.' }),
  password: z.string().nonempty({ message: '비밀번호는 필수 입력입니다.' }),
});

const inputValidSchema = z.object({
  email: z.string().refine(validateEmail, {
    message: '올바른 이메일 형식이 아닙니다.',
  }),
  password: z.string().refine(validatePassword, {
    message: '비밀번호는 영문, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.',
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

  const [formErrors, setFormErrors] = useState<{
    email: string[] | undefined;
    password: string[] | undefined;
  }>({
    email: [],
    password: [],
  });

  const isFormValid = () => {
    return (
      formValues.email !== '' &&
      formValues.password !== '' &&
      (formErrors.email?.length ?? 0) === 0 &&
      (formErrors.password?.length ?? 0) === 0
    );
  };

  const handleInputBlur =
    (key: 'email' | 'password') => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newFormValues = { ...formValues, [key]: e.target.value };
      setFormValues(newFormValues);

      const result = inputEmptySchema.safeParse(newFormValues);

      if (!result.success) {
        const fieldErrors = result.error.flatten().fieldErrors;

        setFormErrors((prev) => ({
          ...prev,
          [key]: fieldErrors[key],
        }));
      } else {
        setFormErrors((prev) => ({
          ...prev,
          [key]: '',
        }));
      }
    };

  const handleInputChange =
    (key: 'email' | 'password') => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newFormValues = { ...formValues, [key]: e.target.value };
      const result = inputValidSchema.safeParse(newFormValues);

      if (!result.success) {
        const fieldErrors = result.error.flatten().fieldErrors;

        setFormErrors((prev) => ({
          ...prev,
          [key]: fieldErrors[key],
        }));
      } else {
        setFormErrors((prev) => ({
          ...prev,
          [key]: '',
        }));
      }
      setFormValues(newFormValues);
    };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid()) return;

    try {
      const data = await signIn({
        body: {
          email: formValues.email,
          password: formValues.password,
        },
      });
      console.log(data);
      toast.success('로그인 성공');
    } catch (error) {
      // 여기서 로그인 실패 메시지 처리 (clientFetcher 에서 throw error)
      console.error('error', error);
      toast.error('로그인 실패');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1 className="text-4xl-medium mb-20 text-center">로그인</h1>

      <div className="flex flex-col gap-6">
        <InputWithLabel
          inputType="email"
          errorMessage={formErrors.email}
          onInputBlur={handleInputBlur}
          onInputChange={handleInputChange}
        />
        <InputWithLabel
          inputType="password"
          errorMessage={formErrors.password}
          onInputBlur={handleInputBlur}
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
        disabled={!isFormValid()}
      >
        로그인
      </Button>
    </form>
  );
}
