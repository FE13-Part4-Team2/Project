'use client';

import ForgotPasswordButton from '@/app/(auth)/login/_components/LoginForm/ForgotPasswordButton';
import InputWithLabel from '@/app/(auth)/login/_components/LoginForm/InputWithLabel';
import Button from '@/components/common/Button';
import { signIn } from '@/lib/apis/auth';
import { useEffect, useState } from 'react';

export default function LoginForm() {
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleOpenModal = () => {
    // open password-find modal
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // form submit
    if (isEmailValid && isPasswordValid) {
      console.log('유효해');
      try {
        signIn({ email, password });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1 className="text-4xl-medium mb-20 text-center">로그인</h1>

      <div className="flex flex-col gap-6">
        <InputWithLabel
          inputType="email"
          autoComplete="email"
          onValidChange={setIsEmailValid}
          onValueChange={setEmail}
        />
        <InputWithLabel
          inputType="password"
          autoComplete="current-password"
          onValidChange={setIsPasswordValid}
          onValueChange={setPassword}
        />
      </div>

      <ForgotPasswordButton onClick={handleOpenModal} />

      <Button
        size="lg"
        variant="primary"
        styleType="filled"
        radius="sm"
        className="w-[460px]"
        disabled={!(isEmailValid && isPasswordValid)}
      >
        로그인
      </Button>
    </form>
  );
}
