'use client';

import TestModal from '@/components/common/Modal/content/TestModal';
import { useModalStore } from '@/store/useModalStore';

export default function ModalButton() {
  const { openModal } = useModalStore();

  return (
    <button
      type="button"
      onClick={() => {
        openModal(
          {
            variant: 'oneButton',
            title: '제목',
            description: '설명',
            onSubmit: () => {},
          },
          <TestModal />
        );
      }}
      className="bg-[#000000] text-[#ffffffff]"
    >
      모달
    </button>
  );
}
