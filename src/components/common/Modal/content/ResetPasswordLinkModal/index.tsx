'use client';

import InputBase from '@/components/common/Input/InputBase';
import { useModalStore } from '@/store/useModalStore';
import { validateEmail } from '@/utils/inputValidation';
import { useRef } from 'react';

// contents
export default function ResetPasswordLinkModal() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setRequestBody } = useModalStore();

  const handleEmailValidation = () => {
    const email = inputRef.current?.value.trim();

    if (!email) return;

    if (validateEmail(email)) {
      setRequestBody({ email });
    }
  };

  return (
    <form
      id="reset-password-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleEmailValidation();
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
