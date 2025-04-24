import React, { useState } from 'react';
import BaseInput from '@/components/common/Input/InputBase';
import {
  validateEmail,
  validatePassword,
  validatePasswordMatch,
} from '@/hooks/inputValidation';

interface InputSignupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  invalidMessage?: string;
  pattern?: string;
  onValueChange: (value: string) => void;
}

const InputSignup = ({
  label,
  pattern,
  invalidMessage = '올바른 값을 입력해주세요',
  onValueChange,
  ...props
}: InputSignupProps) => {
  const [value, setValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    onValueChange(val);

    if (pattern) {
      const regex = new RegExp(pattern);
      setIsInvalid(!regex.test(val));
    }
  };

  return (
    <div className="flex w-full flex-col gap-1">
      <label className="text-sm text-white">{label}</label>
      <BaseInput
        {...props}
        value={value}
        onChange={handleChange}
        isInvalid={isInvalid}
        customClassName="h-[48px] bg-slate-800"
      />
      {isInvalid && (
        <p className="text-danger text-md-medium">{invalidMessage}</p>
      )}
    </div>
  );
};

export default InputSignup;
