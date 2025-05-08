'use client';
import React, { useRef } from 'react';
import clsx from 'clsx';
import IconRenderer from '@/components/common/Icons/IconRenderer';

interface InputBoxProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'base' | 'box' | 'reply'; // 할 일 댓글 수정 | 자유게시판 | 할 일 댓글 작성
  className?: string;
  onClick?: () => void;
}

const InputTextarea = ({
  variant,
  className = '',
  onClick,
  ...props
}: InputBoxProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight}px`;
    }
  };

  return (
    <div className="relative w-full">
      <textarea
        {...props}
        ref={textareaRef}
        onInput={handleInput}
        className={clsx(
          'w-full resize-none overflow-hidden focus:outline-none',

          variant === 'box' &&
            'rounded-[12px] border border-slate-50/10 bg-slate-800 focus:border-green-800',

          variant === 'reply' && 'border-t border-b border-slate-50/10',
          className
        )}
      />
      {variant === 'reply' && (
        <button
          onClick={onClick}
          className="absolute top-3 right-3 flex size-6 items-center justify-center rounded-full bg-green-700"
        >
          <IconRenderer name="ArrowTopIcon" size={16} />
        </button>
      )}
    </div>
  );
};

export default InputTextarea;
