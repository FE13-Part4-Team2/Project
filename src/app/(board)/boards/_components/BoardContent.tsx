'use client';

import { useSearchParams } from 'next/navigation';
import { useBoardPosts } from '@/app/(board)/boards/_hooks/useBoardPosts';
import SearchInput from '@/app/(board)/boards/_components/SearchInput';
import BestPostList from '@/app/(board)/boards/_components/BestPostList';
import SortDropdownArea from '@/app/(board)/boards/_components/SortDropdown';
import PostList from '@/app/(board)/boards/_components/PostList';
import WriteButton from '@/app/(board)/boards/_components/WriteButton';
import Pagination from '@/app/(board)/boards/_components/BoardPagination';

export default function BoardContent() {
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
    <>
      <SearchInput onSearch={handleSearch} />
      {error && <div className="py-10 text-center text-red-500">{error}</div>}
      {isBestLoading ? (
        <div className="py-10 text-center text-slate-400">로딩 중...</div>
      ) : (
        <BestPostList posts={bestPosts} />
      )}
      <div className="mb-10 border border-slate-50/10"></div>
      <SortDropdownArea />
      {isPostsLoading ? (
        <div className="py-10 text-center text-slate-400">로딩 중...</div>
      ) : filteredPosts.length === 0 && searchQuery ? (
        <div className="py-10 text-center text-slate-400">
          <p>
            <strong className="text-green-700">{searchQuery}</strong>에 해당하는
            게시글을 찾을 수 없습니다.
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
      <WriteButton />
    </>
  );
}
