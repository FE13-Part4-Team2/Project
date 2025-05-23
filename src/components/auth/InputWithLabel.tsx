'use client';

import { InputWithLabelProps } from '@/components/auth/type';
import Icons from '@/components/common/Icons';
import clsx from 'clsx';
import { useState } from 'react';

export default function InputWithLabel({
  inputType,
  errorMessage = [],
  onInputBlur,
  onInputChange,
  mode,
  ...props
}: InputWithLabelProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const inputTypeMap: Record<InputWithLabelProps['inputType'], string> = {
    email: '이메일',
    password: '비밀번호',
    userName: '이름',
    passwordConfirm: '비밀번호 확인',
  };

  const isPasswordResetPage = mode === 'resetPasswordPage';

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
            inputType === 'password' || inputType === 'passwordConfirm'
              ? isPasswordVisible
                ? 'text'
                : 'password'
              : inputType
          }
          id={inputType}
          name={inputType}
          required
          placeholder={
            isPasswordResetPage && inputType === 'password'
              ? '영문과 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.'
              : isPasswordResetPage && inputType === 'passwordConfirm'
                ? '새 비밀번호를 다시 한번 입력해주세요.'
                : `${inputTypeMap[inputType]}을 입력해주세요.`
          }
          autoComplete="true"
          className={clsx(
            'w-full rounded-xl border bg-slate-800 p-4 outline-hidden',
            errorMessage.length > 0
              ? 'border-danger'
              : 'border-slate-50/10 focus:border-green-800'
          )}
          onBlur={onInputBlur?.(inputType)}
          onChange={onInputChange?.(inputType)}
          {...props}
        />

        {(inputType === 'password' || inputType === 'passwordConfirm') && (
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
