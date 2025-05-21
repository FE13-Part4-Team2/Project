'use client';

import ResetPasswordLinkModal from '@/components/common/Modal/content/ResetPasswordLinkModal';
import { postResetPasswordToEmail } from '@/lib/apis/user';
import { ResetPasswordToEmailBody } from '@/lib/apis/user/type';
import { useModalStore } from '@/store/useModalStore';
import { validateEmail } from '@/utils/inputValidation';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

export default function ForgotPasswordButton({ ...props }) {
  const { openModal } = useModalStore();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const { setRequestBody } = useModalStore();

  //   // const { email } = newBody as { email: string };

  useEffect(() => {
    // requestBody 에서 email 을 추출
    const unsubscribe = useModalStore.subscribe(
      (state) => state.requestBody, // 구독할 상태를 선택하는 함수. selectorFn
      // 해당 상태가 변경됬을 때 실행될 함수. listenerFn
      // newRequestBody : 최신 상태
      (newRequestBody) => {
        if (newRequestBody?.email) {
          const requestBody = {
            email: newRequestBody.email,
            redirectUrl: `${window.location.origin}/`,
          };
          handleSendResetPasswordLink(requestBody);
        }
      }
    );
    return () => {
      unsubscribe(); // 언마운트, 구독 해제
    };
  }, []);

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
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = error.message;

        // 존재하지 않는 유저 : User not found
        if (errorMessage.includes('User not found')) {
          toast.error('존재하지 않는 이메일입니다. 회원가입을 먼저 해주세요.');
          router.push('/signup');
        } else {
          toast.error(`Error : ${error}`);
        }
      }
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
                onRequest: () => {
                  // 이메일 유효성 검사
                  const email = inputRef.current?.value.trim();
                  if (!email) return;
                  if (validateEmail(email)) {
                    setRequestBody({ email }); // Zustand requestBody 설정
                  }
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
