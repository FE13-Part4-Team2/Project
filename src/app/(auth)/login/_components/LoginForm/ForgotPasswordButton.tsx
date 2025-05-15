'use client';

import ResetPasswordLinkModal from '@/components/common/Modal/content/ResetPasswordLinkModal';
import { useModalStore } from '@/store/useModalStore';

export default function ForgotPasswordButton({ ...props }) {
  const { openModal } = useModalStore(); // 넘겨야 하는 값 : options, content

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
                onRequest: (body) => console.log(body), // ?
              },
            },
            <ResetPasswordLinkModal />
          );
        }}
        {...props}
      >
        비밀번호를 잊으셨나요?
      </button>
    </div>
  );
}
