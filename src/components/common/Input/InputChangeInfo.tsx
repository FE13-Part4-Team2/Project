// 계정 설정 페이지 사용 인풋

import React from 'react';
import BaseInput from '@/components/common/Input/InputBase';

interface InputChangeInfoProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputChangeInfo = ({ label, ...props }: InputChangeInfoProps) => {
  return (
    <BaseInput
      {...props}
      label={label}
      containerClassName="h-[48px] bg-slate-700"
      inputClassName="placeholder:text-slate-400 pr-6"
    />
  );
};

export default InputChangeInfo;
