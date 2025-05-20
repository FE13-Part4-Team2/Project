'use client';
import Button from '@/components/common/Button';
import InputBase from '@/components/common/Input/InputBase';
import FileInput from '@/app/(board)/article/_components/FileInput';
import { useState } from 'react';

export default function AddArticlePage() {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  return (
    <div>
      <section className="laptop:px-6 m-auto mt-14 mb-14 min-h-full max-w-[1248px] p-4">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="tablet:text-xl-bold text-2lg-medium">게시글 쓰기</h2>
          <Button
            variant="primary"
            styleType="filled"
            size="lg"
            radius="sm"
            className="tablet:min-w-[184px] tablet:opacity-100 tablet:inline hidden opacity-0"
          >
            등록
          </Button>
        </div>
        <div className="border-gray-750/10 mb-10 w-full border-1"></div>
        <InputBase
          title="제목"
          type="text"
          value={title}
          placeholder="제목을 입력해주세요."
          onChange={(e) => setTitle(e.target.value)}
          className="w-full"
          containerClassName="mt-3 h-[48px] bg-slate-800 mb-10"
        />
        <InputBase
          title="내용"
          type="text"
          value={contents}
          placeholder="내용을 입력해주세요."
          onChange={(e) => setContents(e.target.value)}
          className="w-full"
          containerClassName="mt-3 h-[240px] bg-slate-800 mb-10 whitespace-normal"
        />
        <FileInput title="이미지" containerClassName="mb-10" />
        <Button
          variant="primary"
          styleType="filled"
          size="lg"
          radius="sm"
          className="tablet:opacity-0 tablet:hidden mb-10 block w-full opacity-100"
        >
          등록
        </Button>
      </section>
    </div>
  );
}
