'use client';

import { useState } from 'react';
import InputBase from '@/components/common/Input/InputBase';
import InputSignup from '@/components/common/Input/InputSignup';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Landing Page</h1>
      <div className="flex flex-col gap-4 px-2">
        <InputBase />
        <InputSignup
          label="이메일"
          placeholder="이메일을 입력해 주세요"
          onValueChange={setEmail}
        />
        <InputSignup
          label="비밀번호"
          placeholder="비밀번호를 입력해 주세요"
          onValueChange={setPassword}
        />
      </div>
    </div>
  );
}
