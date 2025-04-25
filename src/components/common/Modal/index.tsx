'use client';

import { useModalStore } from '@/store/useModalStore';

export default function Modal() {
  const { options, content, closeModal } = useModalStore();
  // const { variant, title, description, onSubmit } = options;

  if (!options || !content) return;

  return (
    <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black/70">
      <div className="flex h-[50vh] w-[50vh] items-center justify-center rounded border-none bg-white">
        <div className="text-black">
          {content}
          <button onClick={closeModal}>닫기</button>
        </div>
      </div>
    </div>
  );
}
