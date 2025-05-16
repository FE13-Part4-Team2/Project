'use client';

import { useRef, useEffect } from 'react';
import { useModalStore } from '@/store/useModalStore';
import { useClosePopup } from '@/hooks/useClosePopup';
import { useLockBackgroundScroll } from '@/hooks/useLockBackgroundScroll';
import Button from '@/components/common/Button';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import clsx from 'clsx';

export default function Modal() {
  const {
    options: { variant = 'default', title, description, button },
    content,
    requestBody,
    isButtonDisabled,
    closeModal,
  } = useModalStore();

  const formId = button?.formId;
  const modalRef = useRef<HTMLDivElement>(null);
  const isModalOpen = Boolean(title || content);

  const isSubmittedRef = useRef(false); // 🔁 버튼 클릭 플래그

  useClosePopup(modalRef, closeModal);
  useLockBackgroundScroll(isModalOpen);

  // ✅ requestBody가 설정되면 onRequest 실행
  useEffect(() => {
    if (isSubmittedRef.current && requestBody) {
      button?.onRequest?.(requestBody);
      closeModal();
      isSubmittedRef.current = false; // 초기화
    }
  }, [requestBody]);

  const handleRequest = () => {
    isSubmittedRef.current = true; // 버튼 클릭됨 → form 제출을 기다림
  };

  if (!isModalOpen) return null;

  return (
    <div className="tablet:items-center fixed inset-0 z-80 flex h-full w-full items-end justify-center bg-black/50">
      <div
        ref={modalRef}
        className={clsx(
          'tablet:w-[384px] tablet:rounded-b-xl relative flex w-full flex-col rounded-t-3xl border-none bg-slate-800 pb-8',
          variant === 'default' && 'gap-6 px-[52px] pt-12',
          variant === 'danger' && 'gap-6 px-[52px] pt-8',
          variant === 'taskForm' && 'gap-8 px-6 pt-8'
        )}
      >
        {button?.number === 1 && (
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-4 right-6 size-6 rounded-full transition-colors duration-100 hover:bg-slate-700"
          >
            <IconRenderer name="XIcon" />
          </button>
        )}
        <div className="tablet:max-h-[60vh] flex max-h-[70vh] flex-col items-center gap-4">
          {variant === 'danger' && <IconRenderer name="AlertIcon" />}
          <div
            className={clsx(
              'flex w-full flex-col overflow-hidden',
              variant === 'taskForm' ? 'gap-6' : 'gap-4'
            )}
          >
            {(title || description) && (
              <div
                className={clsx(
                  'flex flex-col items-center',
                  variant === 'taskForm' ? 'gap-4' : 'gap-2'
                )}
              >
                {title && (
                  <div className="text-lg-medium text-center whitespace-pre-line">
                    {title}
                  </div>
                )}
                {description && (
                  <div
                    className={clsx(
                      'text-md-medium text-center whitespace-pre-line',
                      variant === 'danger' ? '' : 'text-slate-500'
                    )}
                  >
                    {description}
                  </div>
                )}
              </div>
            )}
            {content && (
              <div className="overflow-y-auto">
                {typeof content === 'function' ? content() : content}
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          {button?.number === 2 && (
            <Button
              variant="primary"
              styleType={variant === 'danger' ? 'neutral' : 'outlined'}
              className="flex-1"
              radius="sm"
              size="lg"
              onClick={closeModal}
            >
              닫기
            </Button>
          )}
          <Button
            {...(formId ? { form: formId } : {})}
            // type="submit"
            variant="primary"
            styleType={variant === 'danger' ? 'danger' : 'filled'}
            className="flex-1"
            radius="sm"
            size="lg"
            onClick={handleRequest} // ✅ 유지됨
            disabled={isButtonDisabled}
          >
            {button?.text}
          </Button>
        </div>
      </div>
    </div>
  );
}
