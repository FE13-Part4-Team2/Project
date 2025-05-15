'use client';
import React from 'react';
import InputBase from '@/components/common/Input/InputBase';
import Button from '@/components/common/Button';
import { useModalStore } from '@/store/useModalStore';
import UpdatePasswordModal from '@/components/common/Modal/content/UpdatePasswordModal';

const AccountInfoSection = () => {
  const { openModal } = useModalStore();

  return (
    <div className="mb-6 flex w-full flex-col gap-4">
      <InputBase
        title="이름"
        type="text"
        className="w-full"
        containerClassName="mt-3 h-[48px] bg-slate-700"
      />
      <InputBase
        title="이메일"
        type="email"
        className="cursor-not-allow w-full"
        containerClassName="mt-3 h-[48px] bg-slate-800"
      />
      <InputBase
        title="비밀번호"
        type="password"
        placeholder="현재 사용 중인 비밀번호를 입력해주세요."
        className="w-full"
        containerClassName="mt-3 h-[48px] bg-slate-800"
        rightIcon={
          <Button
            variant="primary"
            styleType="filled"
            radius="sm"
            size="sm"
            className="text-md-semibold h-full w-[74px]"
            onClick={() => {
              openModal(
                {
                  variant: 'default',
                  title: '비밀번호 변경하기',
                  button: {
                    number: 2,
                    text: '변경하기',
                    onRequest: () => {},
                  },
                },
                <UpdatePasswordModal />
              );
            }}
          >
            변경하기
          </Button>
        }
      />
    </div>
  );
};

export default AccountInfoSection;
