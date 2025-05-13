'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useBoardPosts } from '@/app/(board)/boards/_hooks/useBoardPosts';
import SearchInput from '@/app/(board)/boards/_components/SearchInput';
import BestPostList from '@/app/(board)/boards/_components/BestPostList';
import SortDropdownArea from '@/app/(board)/boards/_components/SortDropdown';
import PostList from '@/app/(board)/boards/_components/PostList';
import WriteButton from '@/app/(board)/boards/_components/WriteButton';
import Pagination from '@/app/(board)/boards/_components/BoardPagination';

export default function BoardsPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('keyword') || '';
  const initialPage = parseInt(searchParams.get('page') || '1', 10);
  const initialOrder =
    (searchParams.get('orderBy') as 'recent' | 'like') || 'recent';

  const {
    searchQuery,
    currentPage,
    bestPosts,
    filteredPosts,
    totalPosts,
    isBestLoading,
    isPostsLoading,
    error,
    handleSearch,
    paginate,
  } = useBoardPosts(initialQuery, initialPage, initialOrder);

  const postsPerPage = 10;

  return (
    <div className="h-100vh tablet:px-6 laptop:max-w-[1200px] relative m-auto my-10 flex flex-col px-6">
      <h2 className="text-2xl-bold mb-10 text-slate-50">자유게시판</h2>
      <SearchInput onSearch={handleSearch} />
      {error && <div className="py-10 text-center text-red-500">{error}</div>}
      {isBestLoading ? (
        <div className="py-10 text-center text-slate-400">로딩 중...</div>
      ) : (
        <BestPostList posts={bestPosts} />
      )}
      <div className="mb-10 border border-slate-50/10"></div>
      <SortDropdownArea />
      <Suspense
        fallback={
          <div className="py-10 text-center text-slate-400">로딩 중...</div>
        }
      >
        {isPostsLoading ? (
          <div className="py-10 text-center text-slate-400">로딩 중...</div>
        ) : filteredPosts.length === 0 && searchQuery ? (
          <div className="py-10 text-center text-slate-400">
            <p>
              <strong className="text-green-700">{searchQuery}</strong>에
              해당하는 게시글을 찾을 수 없습니다.
            </p>
          </div>
        ) : (
          <>
            <PostList posts={filteredPosts} />
            <Pagination
              currentPage={currentPage}
              totalPosts={totalPosts}
              postsPerPage={postsPerPage}
              paginate={paginate}
            />
          </>
        )}
      </Suspense>
      <WriteButton />
    </div>
  );
}
