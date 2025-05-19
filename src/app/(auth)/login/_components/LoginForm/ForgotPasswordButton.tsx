'use client';

import ResetPasswordLinkModal from '@/components/common/Modal/content/ResetPasswordLinkModal';
import { postResetPasswordToEmail } from '@/lib/apis/user';
import { ResetPasswordToEmailBody } from '@/lib/apis/user/type';
import { useModalStore } from '@/store/useModalStore';

// 클릭 시 비밀번호 재설정 모달 열림
// openModal : options, content 를 받아서 모달을 렌더링 & store 에 상태 저장
export default function ForgotPasswordButton({ ...props }) {
  const { openModal } = useModalStore();

  const handleSendResetPasswordLink = async (
    requestBody: ResetPasswordToEmailBody
  ) => {
    // send link to email
    console.log('requestBody', requestBody);

    try {
      const response = await postResetPasswordToEmail({ body: requestBody });
      console.log('response', response);
      if (!response) {
        throw new Error('Failed to send reset password link');
      }
    } catch (error) {
      console.error('Error sending reset password link:', error);
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
                formId: 'reset-password-form', // formId 연결
                number: 2,
                text: '링크 보내기',
                onRequest: (body) => {
                  const { email } = body as { email: string };

                  const requestBody: ResetPasswordToEmailBody = {
                    email,
                    redirectUrl: `${window.location.origin}/`,
                  };
                  handleSendResetPasswordLink(requestBody);
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
