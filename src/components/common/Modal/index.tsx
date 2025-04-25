import { createPortal } from 'react-dom';

export default function Modal({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return;

  return createPortal(
    <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black/70">
      <div className="flex h-[50vh] w-[50vh] items-center justify-center rounded border-none bg-white">
        <div className="text-black">Modal</div>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
}
