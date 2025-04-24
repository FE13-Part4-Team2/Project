'use client';

import { useState } from 'react';
import InputBase from '@/components/common/Input/InputBase';
import InputSignup from '@/components/common/Input/InputSignup';

export default function LandingPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState('');

  return (
    <div>
      <h1>Landing Page</h1>
      <div className="flex flex-col gap-4 px-2">
        <InputBase />
        <InputSignup
          label="이름"
          value={name}
          pattern="name"
          placeholder="이름을 입력해 주세요"
          invalidMessage="8자 이하로 입력해 주세요."
          onValueChange={setName}
        />
        <InputSignup
          label="이메일"
          value={email}
          pattern="email"
          placeholder="이메일을 입력해 주세요"
          invalidMessage="올바른 이메일 형식을 입력해 주세요."
          onValueChange={setEmail}
        />
        <InputSignup
          label="비밀번호"
          value={password}
          pattern="password"
          placeholder="비밀번호를 입력해 주세요"
          invalidMessage="영문자와 숫자를 포함해 8자 이상 입력해 주세요."
          onValueChange={setPassword}
        />
        <InputSignup
          label="비밀번호 확인"
          value={passwordMatch}
          pattern="passwordMatch"
          originalPassword={password}
          placeholder="비밀번호를 한 번 더 입력해 주세요"
          invalidMessage="비밀번호 확인이 틀렸습니다."
          onValueChange={setPasswordMatch}
        />
      </div>
    </div>
  );
}
