'use client';

import { useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useIntersection } from '@/hooks/useIntersection';
import { ArticleCommentListResponse } from '@/lib/apis/articleComment/type';
import { getCommentsByArticleId } from '@/lib/apis/articleComment';
import { toast } from 'react-toastify';
import ArticleCommentCard from './ArticleCommentCard';

const LIMIT = 3;

export default function ArticleCommentSection({
  articleId,
}: {
  articleId: number;
}) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery<ArticleCommentListResponse | null, Error>({
      queryKey: [articleId],
      queryFn: ({ pageParam }) =>
        getCommentsByArticleId({
          articleId,
          limit: LIMIT,
          cursor: pageParam as number | null,
        }),
      getNextPageParam: (lastPage) => lastPage?.nextCursor,
      initialPageParam: null,
    });

  useIntersection({
    target: observerRef,
    onIntersect: () => {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
  });

  if (status === 'error') {
    toast.error('댓글을 불러오지 못했습니다');
  }

  return (
    <div className="flex flex-col gap-4">
      {data?.pages.map((page, pageIdx) =>
        page?.list.map((item, itemIdx) => {
          const isLast =
            pageIdx === data.pages.length - 1 &&
            itemIdx === page.list.length - 1;
          return (
            <div key={item.id} ref={isLast ? observerRef : null}>
              <ArticleCommentCard {...item} />
            </div>
          );
        })
      )}

      {isFetchingNextPage && <p>Loading...</p>}
    </div>
  );
}
