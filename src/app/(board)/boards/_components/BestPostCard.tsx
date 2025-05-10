'use client';

import Image from 'next/image';

type BestPostCardProps = {
  title: string;
  date: string;
  username: string;
  likes: number;
  image?: string;
};

export default function BestPostCard({
  title,
  date,
  username,
  likes,
  image,
}: BestPostCardProps) {
  return (
    <article className="h-full w-[387px] rounded-xl border border-slate-700 bg-slate-800 px-6 py-4">
      <div className="mb-3.5 flex items-center gap-1">
        <Image
          src="/best_badge_icon.svg"
          alt="베스트 게시글 뱃지"
          width={16}
          height={16}
        />
        <p className="text-lg-semibold text-white">Best</p>
      </div>
      <div className="mb-10">
        {image ? (
          <div className="flex h-[52px] gap-3">
            <p className="text-2lg-medium mb-3 line-clamp-2 w-full overflow-ellipsis text-slate-100">
              {title}
            </p>
            <div className="h-[72px] w-[72px] flex-shrink-0 rounded-lg bg-slate-600"></div>
          </div>
        ) : (
          <p className="text-2lg-medium mb-3 line-clamp-2 w-full overflow-ellipsis text-slate-100">
            {title}
          </p>
        )}
        <span className="text-md-medium text-slate-400">{date}</span>
      </div>
      <div className="item-center mb-4 flex justify-between">
        <div className="flex items-center gap-3">
          <p className="h-8 w-8 rounded-full bg-slate-500"></p>
          <p className="text-md-medium text-slate-50">{username}</p>
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
