'use client';

import ResetPasswordLinkModal from '@/components/common/Modal/content/ResetPasswordLinkModal';
import { postResetPasswordToEmail } from '@/lib/apis/user';
import { ResetPasswordToEmailBody } from '@/lib/apis/user/type';
import { useModalStore } from '@/store/useModalStore';
import { toast } from 'react-toastify/unstyled';

export default function ForgotPasswordButton({ ...props }) {
  const { openModal, closeModal } = useModalStore();

  // send reset password link
  const handleSendResetPasswordLink = async (
    requestBody: ResetPasswordToEmailBody
  ) => {
    try {
      const response = await postResetPasswordToEmail({ body: requestBody });
      if (!response) {
        throw new Error('204 : No Content');
      }
      toast.success('비밀번호 재설정 링크가 전송되었습니다.');
      closeModal();
    } catch (error) {
      console.error('비밀번호 재설정 요청 실패:', error);
      toast.error(
        '비밀번호 재설정 링크 전송에 실패했습니다. 이메일을 다시 확인해주세요.'
      );
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
function closeModal() {
  throw new Error('Function not implemented.');
}
