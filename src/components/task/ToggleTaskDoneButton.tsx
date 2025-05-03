'use client';

import IconRenderer from '@/components/common/Icons/IconRenderer';
import { useState } from 'react';
import Button from '@/components/common/Button';
import clsx from 'clsx';

export default function ToggleTaskDoneButton({
  variant = 'checkbox',
  doneAt,
}: {
  variant?: 'checkbox' | 'button';
  doneAt: string | null;
}) {
  const [isDone, setIsDone] = useState(Boolean(doneAt));

  const updateTaskToDone = () => {
    setIsDone(true);
  };

  const updateTaskToUndone = () => {
    setIsDone(false);
  };

  return (
    <>
      {variant === 'checkbox' && (
        <IconRenderer
          name={isDone ? 'CheckboxActiveIcon' : 'CheckboxDefaultIcon'}
          onClick={isDone ? updateTaskToUndone : updateTaskToDone}
          className="cursor-pointer"
        />
      )}
      {variant === 'button' && (
        <Button
          variant="floating"
          styleType={isDone ? 'outlined' : 'default'}
          radius="lg"
          size="lg"
          className={clsx(
            'fixed right-6 bottom-6',
            isDone ? 'min-w-[138px]' : 'min-w-[111px]'
          )}
          startIcon={isDone ? 'check_green' : 'check'}
          onClick={isDone ? updateTaskToUndone : updateTaskToDone}
        >
          {isDone ? '완료 취소하기' : '완료하기'}
        </Button>
      )}
    </>
  );
}
