'use client';

import { useEffect, useState } from 'react';
import InputBase from '@/components/common/Input/InputBase';
import Button from '@/components/common/Button';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import Image from 'next/image';

export interface TeamProfileFormProps {
  initialName?: string;
  existingNames: string[];
  initialPreview?: string;
  submitLabel: string;
  onSubmit: (data: { name: string; file?: File }) => Promise<void> | void;
}

export default function TeamProfileForm({
  initialName = '',
  existingNames,
  initialPreview = '',
  submitLabel,
  onSubmit,
}: TeamProfileFormProps) {
  const [name, setName] = useState(initialName);
  const [preview, setPreview] = useState(initialPreview);
  const [file, setFile] = useState<File>();
  const [nameError, setNameError] = useState(false);

  useEffect(() => {
    setName(initialName);
    setPreview(initialPreview);
  }, [initialName, initialPreview]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    let hasErr = false;
    if (!preview) {
      hasErr = true;
    }
    if (existingNames.includes(name.trim())) {
      setNameError(true);
      hasErr = true;
    }
    if (hasErr) return;
    await onSubmit({ name: name.trim(), file });
  };

  return (
    <div className="text-md-regular tablet:w-[456px] tablet:h-[460px] tablet:text-lg-regular flex h-[374px] w-[343px] flex-col items-center">
      <h1 className="text-2xl-medium laptop:text-4xl-medium tablet:mb-20 mb-6">
        {submitLabel}
      </h1>
      <input
        id="team-profile-input"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <div className="mb-6 flex w-full flex-col gap-3 self-start">
        <span className="text-lg-medium">팀 프로필</span>
        <label
          htmlFor="team-profile-input"
          className={`relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-full`}
        >
          {preview ? (
            <Image
              src={preview}
              alt="프로필"
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
          ) : (
            <IconRenderer
              name="ProfileEditIcon"
              size={64}
              className="text-gray-400"
            />
          )}
        </label>
      </div>
      <div className="mb-6 w-full self-start">
        <InputBase
          id="teamName"
          title="팀 이름"
          placeholder="팀 이름을 입력해주세요."
          value={name}
          autoComplete="off"
          isInvalid={nameError}
          onChange={(e) => {
            setName(e.target.value);
            setNameError(false);
          }}
          onKeyDown={handleKeyDown}
          titleClassName="mb-6"
          containerClassName={`w-full bg-slate-800${nameError ? ' border border-red-500' : ''}`}
          inputClassName="w-full h-11 tablet:h-12"
        />
        {nameError && (
          <p className="text-md-medium mt-2 text-red-500">
            이미 존재하는 이름입니다.
          </p>
        )}
      </div>
      <div className="mb-4 w-full">
        <Button
          variant="primary"
          styleType="filled"
          size="lg"
          radius="sm"
          className="text-lg-semibold w-full"
          onClick={handleSubmit}
          disabled={!name.trim()}
        >
          {submitLabel}
        </Button>
      </div>
      <p className="text-md-regular tablet:text-lg-regular">
        팀 이름은 회사명이나 모임 이름 등으로 설정하면 좋아요.
      </p>
    </div>
  );
}
