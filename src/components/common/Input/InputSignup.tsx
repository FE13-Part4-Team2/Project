import React, { useState } from 'react';
import BaseInput from '@/components/common/Input/InputBase';
import {
  validateName,
  validateEmail,
  validatePassword,
  validatePasswordMatch,
} from '@/utils/inputValidation';

interface InputSignupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  invalidMessage?: string;
  pattern?: 'name' | 'email' | 'password' | 'passwordMatch';
  value: string;
  onValueChange: (value: string) => void;
  originalPassword?: string;
}

const InputSignup = ({
  label,
  value,
  pattern,
  invalidMessage = '올바른 값을 입력해주세요',
  onValueChange,
  originalPassword,
  ...props
}: InputSignupProps) => {
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onValueChange(val);

    if (pattern === 'name') {
      setIsInvalid(!validateName(val));
    }

    if (pattern === 'email') {
      setIsInvalid(!validateEmail(val));
    }

    if (pattern === 'password') {
      setIsInvalid(!validatePassword(val));
    }

    if (pattern === 'passwordMatch') {
      setIsInvalid(!validatePasswordMatch(originalPassword ?? '', val));
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
