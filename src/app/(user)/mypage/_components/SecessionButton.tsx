'use client';
import React from 'react';
import Image from 'next/image';
import { useModalStore } from '@/store/useModalStore';

const SecessionButton = () => {
  const { openModal } = useModalStore();

  return (
    <button
      className="text-danger text-lg-medium flex items-center gap-2"
      onClick={() => {
        openModal({
          variant: 'danger',
          title: '회원 탈퇴를 진행하시겠어요?',
          description:
            '그룹장으로 있는 그룹은 자동으로 삭제되고, 모든 그룹에서 나가집니다.',
          button: {
            number: 2,
            text: '회원 탈퇴',
            onRequest: () => {},
          },
        });
      }}
    >
      <Image
        src="/image/secession_icon.svg"
        alt="회원 탈퇴 아이콘"
        width={24}
        height={24}
      />
      회원 탈퇴하기
    </button>
  );
};

export default SecessionButton;
