'use client';

import Image from 'next/image';
import EditDropdown from '@/app/(board)/boards/_components/EditDropdown';

type PostCardProps = {
  title: string;
  date: string;
  username: string;
  likes: number;
  image?: string;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (option: string) => void;
};

export default function PostCard({
  title,
  date,
  username,
  likes,
  image,
  isOpen,
  onToggle,
  onSelect,
}: PostCardProps) {
  return (
    <article className="h-[176px] w-[590px] rounded-xl border border-slate-700 bg-slate-800 px-8 py-6">
      <div className="flex justify-between">
        {image ? (
          <>
            <p className="text-2lg-medium mb-13 line-clamp-2 h-10 w-full overflow-ellipsis text-slate-100">
              {title}
            </p>
            <div className="mx-4 h-[72px] w-[72px] flex-shrink-0 rounded-lg bg-slate-600"></div>
          </>
        ) : (
          <p className="text-2lg-medium mb-13 line-clamp-2 w-full overflow-ellipsis text-slate-100">
            {title}
          </p>
        )}
        <EditDropdown isOpen={isOpen} onToggle={onToggle} onSelect={onSelect} />
      </div>
      <div className="item-center mb-4 flex justify-between">
        <div className="flex items-center gap-3">
          <p className="h-8 w-8 flex-1 rounded-full bg-slate-500"></p>
          <p className="text-md-medium border-r-1 border-slate-700 pr-4 text-slate-50">
            {username}
          </p>
          <span className="text-md-medium text-slate-400">{date}</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/heart_icon.svg"
            width={16}
            height={16}
            alt="좋아요 아이콘"
          />
          <p className="text-slate-400">{likes}+</p>
        </div>
      </div>
    </article>
  );
}
