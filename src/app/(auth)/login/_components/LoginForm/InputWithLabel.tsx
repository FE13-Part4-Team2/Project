'use client';

import Icons from '@/components/common/Icons';
import { useState } from 'react';

interface InputWithLabelProps {
  inputType: 'email' | 'password' | 'name' | 'passwordConfirm';
  errorMessage: string;
  onInputBlur: (
    key: string
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputChange: (
    key: string
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputWithLabel({
  inputType,
  errorMessage = '',
  onInputBlur,
  onInputChange,
  ...props
}: InputWithLabelProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const inputTypeMap: Record<InputWithLabelProps['inputType'], string> = {
    name: '이름',
    email: '이메일',
    password: '비밀번호',
    passwordConfirm: '비밀번호 확인',
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="text-lg-medium" htmlFor={inputType}>
        {inputTypeMap[inputType]}
      </label>

      <div className="relative">
        <input
          type={
            inputType === 'password'
              ? isPasswordVisible
                ? 'text'
                : 'password'
              : inputType
          }
          id={inputType}
          name={inputType}
          required
          placeholder={`${inputTypeMap[inputType]}을 입력해주세요.`}
          className="w-full rounded-xl border border-slate-50/10 bg-slate-800 p-4"
          onBlur={onInputBlur(inputTypeMap[inputType])}
          onChange={onInputChange(inputTypeMap[inputType])}
          {...props}
        />

        {inputType === 'password' && (
          <div className="absolute top-1/2 right-4 -translate-y-1/2">
            {isPasswordVisible ? (
              <Icons.VisibilityOnIcon
                size={24}
                onClick={togglePasswordVisibility}
                className="cursor-pointer"
              />
            ) : (
              <Icons.VisibilityOffIcon
                size={24}
                onClick={togglePasswordVisibility}
                className="cursor-pointer"
              />
            )}
          </div>
        )}
      </div>
      {errorMessage && <span className="text-danger">{errorMessage}</span>}
    </div>
  );
}
