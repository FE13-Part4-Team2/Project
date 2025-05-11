'use client';

import InputWithLabel from '@/components/auth/InputWithLabel';
import Button from '@/components/common/Button';
import { useState } from 'react';

export default function SignupForm() {
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  // form submit
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
    // 회원가입 요청 후 setFormErrors로 에러 메시지 설정
    setFormErrors({
      email: 'test',
      password: 'test',
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1 className="text-4xl-medium mb-20 text-center">회원가입</h1>

      <div className="mb-10 flex flex-col gap-6">
        <InputWithLabel
          inputType="name"
          autoComplete="name"
          onValidChange={setIsEmailValid}
          onValueChange={setEmail}
        />

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
          submitErrorMessage={formErrors.password}
        />

        <InputWithLabel
          inputType="passwordConfirm"
          autoComplete="current-password"
          onValidChange={setIsPasswordValid}
          onValueChange={setPassword}
          submitErrorMessage={formErrors.password}
        />
      </div>

      <div className="flex max-w-[460px] gap-3">
        <Button
          size="lg"
          variant="primary"
          styleType="filled"
          radius="sm"
          className="mb-4 w-[460px] basis-1/3"
          onClick={() => {
            console.log('뒤로 가기');
          }}
          disabled={false}
        >
          취소
        </Button>

        <Button
          size="lg"
          variant="primary"
          styleType="filled"
          radius="sm"
          className="w-[460px] basis-2/3"
          disabled={!(isEmailValid && isPasswordValid)}
        >
          회원가입
        </Button>
      </div>
    </form>
  );
}
