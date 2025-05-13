'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { getArticles } from '@/lib/apis/article';
import { Post, mapArticleToPost } from '@/utils/postMapper';
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

  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [orderBy, setOrderBy] = useState<'recent' | 'like'>(initialOrder);
  const [bestPosts, setBestPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const [isBestLoading, setIsBestLoading] = useState(false);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const postsPerPage = 10;

  // URL의 orderBy 변경 감지
  useEffect(() => {
    const currentOrder =
      (searchParams.get('orderBy') as 'recent' | 'like') || 'recent';
    if (currentOrder !== orderBy) {
      setOrderBy(currentOrder);
      setCurrentPage(1); // 정렬 변경 시 페이지 리셋
    }
  }, [searchParams, orderBy]);

  // 베스트 게시글 가져오기
  useEffect(() => {
    const fetchBestPosts = async () => {
      setIsBestLoading(true);
      try {
        const data = await getArticles({
          page: 1,
          pageSize: 3,
          order: 'like',
        });
        if (!data) throw new Error('베스트 게시글을 불러오지 못했습니다.');
        setBestPosts(data.list.map(mapArticleToPost));
        setError(null);
      } catch (error) {
        console.error('베스트 게시글 로드 실패:', error);
        setError('베스트 게시글을 불러오는 데 실패했습니다.');
      } finally {
        setIsBestLoading(false);
      }
    };
    fetchBestPosts();
  }, []);

  // 일반 게시글 가져오기
  useEffect(() => {
    const fetchPosts = async () => {
      setIsPostsLoading(true);
      try {
        const data = await getArticles({
          page: currentPage,
          pageSize: postsPerPage,
          order: orderBy,
          keyword: searchQuery || undefined,
        });
        if (!data) throw new Error('게시글을 불러오지 못했습니다.');
        setFilteredPosts(data.list.map(mapArticleToPost));
        setTotalPosts(data.totalCount);
        setError(null);
      } catch (error) {
        console.error('게시글 로드 실패:', error);
        setError('게시글을 불러오는 데 실패했습니다.');
      } finally {
        setIsPostsLoading(false);
      }
    };
    fetchPosts();
  }, [searchQuery, currentPage, orderBy]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // 검색 시 페이지 리셋
  };

  // 페이지 이동 처리
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('page', pageNumber.toString());
    window.history.pushState({}, '', `/boards?${newParams.toString()}`);
  };

  return (
    <div className="h-100vh relative m-auto my-10 flex max-w-[1200px] flex-col">
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
