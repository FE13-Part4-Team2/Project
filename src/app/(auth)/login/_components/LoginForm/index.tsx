'use client';

import ForgotPasswordButton from '@/app/(auth)/login/_components/LoginForm/ForgotPasswordButton';
import InputWithLabel from '@/app/(auth)/login/_components/LoginForm/InputWithLabel';
import Button from '@/components/common/Button';
import { signIn } from '@/lib/apis/auth';
import { useEffect, useState } from 'react';

export default function LoginForm() {
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleOpenModal = () => {
    // open password-find modal
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // form submit
    if (isEmailValid && !isPasswordEmpty) {
      console.log('유효해');
      try {
        signIn({ email, password });
      } catch (error) {
        console.error(error);
      }
    }
  };

  // test
  useEffect(() => {
    console.log('이메일 유효', isEmailValid);
    console.log('비밀번호 비어있음', isPasswordEmpty);
  }, [isEmailValid, isPasswordEmpty]);

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
          onEmptyChange={setIsPasswordEmpty}
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
        disabled={!isEmailValid || isPasswordEmpty}
      >
        로그인
      </Button>
    </form>
  );
}
