'use client';

import InputBase from '@/components/common/Input/InputBase';
import { useRef } from 'react';

export default function ResetPasswordLinkModal() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      id="reset-password-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <InputBase
        ref={inputRef}
        placeholder="이메일을 입력하세요."
        defaultValue="" // 초기값 설정
      />
    </form>
  );
}
