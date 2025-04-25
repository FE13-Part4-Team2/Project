'use client';

export default function ModalButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-[#000000] text-[#ffffffff]"
    >
      모달
    </button>
  );
}
