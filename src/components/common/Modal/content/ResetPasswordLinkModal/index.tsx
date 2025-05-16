'use client';

import InputBase from '@/components/common/Input/InputBase';

interface ResetPasswordLinkModalProps {
  value: string;
  onValueChange: (value: string) => void;
  onFormSubmit: () => void; // handleFormSubmit
  submitButton: {
    number: 1 | 2;
    text: string;
    onRequest: (body?: unknown) => void;
  };
}

// content
export default function ResetPasswordLinkModal({
  value,
  onValueChange,
  onFormSubmit,
  submitButton,
}: ResetPasswordLinkModalProps) {
  console.log('modal 렌더링됨');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // form 이벤트 기본 동작은 자식이 처리
        onFormSubmit(); // 부모 handleFormSubmit 호출
        console.log('자식이 폼 제출');
      }}
    >
      <InputBase
        placeholder="이메일을 입력하세요."
        value={value}
        onChange={(e) => {
          onValueChange(e.target.value);
          console.log(e.target.value);
        }}
      />
      <button type="submit">{submitButton}</button>
    </form>
  );
}
