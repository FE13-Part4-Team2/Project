'use client';
import React from 'react';
import Button from '@/components/common/Button';

const AccountUpdateButton = () => {
  return (
    <div className="mb-6">
      <Button
        variant="primary"
        styleType="filled"
        radius="sm"
        className="w-full"
      >
        계정 정보 변경하기
      </Button>
    </div>
  );
};

export default AccountUpdateButton;
