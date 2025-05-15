'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useMutation } from '@tanstack/react-query';
import postImage from '@/lib/apis/uploadImage';
import IconRenderer from '@/components/common/Icons/IconRenderer';

const ProfileImageUploader = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: (file: File) => postImage(file),
    onSuccess: (url) => {
      setPreviewUrl(url);
    },
    onError: (error: Error) => {
      console.error('업로드 오류:', error.message);
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      mutate(file);
    }
  };

  return (
    <div className="relative mb-6 h-[64px] w-[64px]">
      {isPending ? (
        <div className="text-md-semibold flex h-full w-full items-center justify-center rounded-full bg-slate-500">
          {/* 로딩 스피너 (리팩토링) */}
          Loading...
        </div>
      ) : previewUrl ? (
        <div className="relative h-full w-full">
          <Image
            src={previewUrl}
            alt="프로필 미리보기"
            fill
            style={{
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
          <label
            htmlFor="image-upload"
            className="absolute right-0 bottom-0 cursor-pointer"
          >
            <IconRenderer
              name="EditIcon"
              size={18}
              className="rounded-full border-2 border-slate-900 bg-slate-700"
            />
          </label>
        </div>
      ) : (
        <label
          htmlFor="image-upload"
          className="relative h-full w-full cursor-pointer"
        >
          <IconRenderer
            name="MemberIcon"
            size={64}
            className="border-gray-750/10 rounded-4xl border-2 bg-slate-700"
          />
          <span className="absolute right-0 bottom-0">
            <IconRenderer
              name="EditIcon"
              size={20}
              className="rounded-full border-2 border-slate-900 bg-slate-700"
            />
          </span>
        </label>
      )}
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ProfileImageUploader;
