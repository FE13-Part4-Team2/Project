'use client';

import InputBase from '@/components/common/Input/InputBase';
import { useModalStore } from '@/store/useModalStore';
import { validateEmail } from '@/utils/inputValidation';
import { useRef } from 'react';

// content
export default function ResetPasswordLinkModal() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setRequestBody } = useModalStore();

  // 이메일 유효성 판단, 요청 보내고, toast 띄우기, 모달 닫기
  const handleFormSubmit = () => {
    const email = inputRef.current?.value.trim();
    console.log('email', email); // x

    if (!email) return;

    if (validateEmail(email)) {
      setRequestBody({ email });
      console.log('if'); // x
    }
  };

  return (
    <form
      id="reset-password-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleFormSubmit();
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
