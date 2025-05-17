'use client';

import ResetPasswordLinkModal from '@/components/common/Modal/content/ResetPasswordLinkModal';
import { useModalStore } from '@/store/useModalStore';

// 클릭 시 비밀번호 재설정 모달 열림
// openModal : options, content 를 받아서 모달을 렌더링 & store 에 상태 저장
export default function ForgotPasswordButton({ ...props }) {
  const { openModal } = useModalStore();

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
                formId: 'reset-password-form', // formId 연결
                number: 2,
                text: '링크 보내기',
                onRequest: (body) => {
                  console.log('전송 :', body); // {email : 'jjanie@naver.com'} 으로 찍힘
                  // 실제 api 요청 처리
                },
              },
            },
            (() => <ResetPasswordLinkModal />)()
          );
        }}
        {...props}
      >
        비밀번호를 잊으셨나요?
      </button>
    </div>
  );
}
