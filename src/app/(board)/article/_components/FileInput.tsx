'use client';
import React from 'react';
import IconRenderer from '@/components/common/Icons/IconRenderer';

interface FileInputProps {
  title?: string;
  onChange?: (file: File | null) => void;
  containerClassName?: string;
  inputClassName?: string;
  iconClassName?: string;
}

const FileInput = ({
  title,
  onChange,
  containerClassName = '',
  inputClassName = '',
  iconClassName = '',
}: FileInputProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (onChange) {
      onChange(file);
    }
  };

  return (
    <div className="flex w-full flex-col">
      {title && (
        <label className="mb-2 block text-sm text-gray-400">{title}</label>
      )}
      <div
        className={`tablet:h-[240px] tablet:w-[240px] relative flex h-[160px] w-[160px] cursor-pointer items-center justify-center rounded-xl bg-slate-800 ${containerClassName}`}
      >
        <input
          type="file"
          accept="image/*"
          className={`absolute h-full w-full cursor-pointer opacity-0 ${inputClassName}`}
          onChange={handleFileChange}
        />
        <IconRenderer
          name="PlusIcon"
          size={48}
          className={`text-gray-400 ${iconClassName}`}
        />
      </div>
    </div>
  );
};

export default FileInput;
