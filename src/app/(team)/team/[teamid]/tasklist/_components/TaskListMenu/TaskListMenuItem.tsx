'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import clsx from 'clsx';

export default function TaskListMenuItem({
  id,
  name,
}: {
  id: number;
  name: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedId = Number(searchParams.get('id'));
  const date =
    searchParams.get('date') || new Date().toISOString().slice(0, 10);

  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    params.set('id', id.toString());
    params.set('date', date);
    router.push(`?${params.toString()}`);
  };

  return (
    <button
      type="button"
      className={clsx(
        'pb-1 text-slate-500',
        id == selectedId && 'border-b text-white'
      )}
      onClick={handleClick}
    >
      <div className="text-lg-medium">{name}</div>
    </button>
  );
}
