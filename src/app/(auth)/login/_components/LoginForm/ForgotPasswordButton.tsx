'use client';

import ResetPasswordLinkModal from '@/components/common/Modal/content/ResetPasswordLinkModal';
import { useModalStore } from '@/store/useModalStore';
import { validateEmail } from '@/utils/inputValidation';
import { useEffect, useState } from 'react';

interface ResetPasswordBodyType {
  email: string;
}

// 클릭 시 비밀번호 재설정 모달 열림
// openModal : options, content 를 받아서 모달을 렌더링 & store 에 상태 저장
export default function ForgotPasswordButton({ ...props }) {
  const { openModal } = useModalStore(); // 넘겨야 하는 값 : options, content
  const { options } = useModalStore();
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    console.log('email', email);
  }, [email]);

  // 이메일 유효성 판단, 요청 보내고, toast 띄우기, 모달 닫기
  const handleFormSubmit = () => {
    console.log('부모 handleFormSubmit 실행'); //

    const trimmedEmail = email.trim();
    if (!trimmedEmail) return;

    if (validateEmail(trimmedEmail)) {
      options?.button?.onRequest({ trimmedEmail });
      console.log('onRequest 호출');
    }
  };

  return (
    <div className="mt-3 mb-10 flex justify-end">
      <button
        className="leading-normal font-medium text-emerald-500 underline"
        type="button"
        onClick={() => {
          openModal(
            {
              title: '비밀번호 재설정',
              description: '비밀번호 재설정 링크를 보내드립니다.',
              button: {
                number: 2,
                text: '링크 보내기',
                // 모달 내부 폼에서 입력 받은 데이터를 외부로 전달해서 처리, 전역 상태로 저장
                onRequest: (body) => {
                  // 버튼 클릭 시 동작 함수
                  // handleFormSubmit(body)
                },
              },
            }, // options
            // JSX 로 직접 렌더링?
            <ResetPasswordLinkModal
              value={email}
              onValueChange={setEmail}
              onFormSubmit={handleFormSubmit}
              submitButton={options.button}
            /> // content
          );
        }}
        {...props}
      >
        비밀번호를 잊으셨나요?
      </button>
    </div>
  );
}
