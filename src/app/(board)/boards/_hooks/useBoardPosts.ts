'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getArticles } from '@/lib/apis/article';
import { Post, mapArticleToPost } from '@/utils/postMapper';

interface UseBoardPostsReturn {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  orderBy: 'recent' | 'like';
  setOrderBy: (order: 'recent' | 'like') => void;
  bestPosts: Post[];
  filteredPosts: Post[];
  totalPosts: number;
  isBestLoading: boolean;
  isPostsLoading: boolean;
  error: string | null;
  handleSearch: (query: string) => void;
  paginate: (pageNumber: number) => void;
}

export function useBoardPosts(
  initialQuery: string,
  initialPage: number,
  initialOrder: 'recent' | 'like'
): UseBoardPostsReturn {
  const router = useRouter();
  const searchParams = useSearchParams();
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

  useEffect(() => {
    const currentOrder =
      (searchParams.get('orderBy') as 'recent' | 'like') || 'recent';
    if (currentOrder !== orderBy) {
      setOrderBy(currentOrder);
      setCurrentPage(1);
    } else {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.set('orderBy', orderBy);
      router.push(`/boards?${newSearchParams.toString()}`, { scroll: false });
    }
  }, [searchParams, orderBy, router]);

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
        console.error('베스트 게시글 불러오기 실패:', error); //임시처리
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
        console.error('게시글 로드 실패:', error); //임시처리
        setError('게시글을 불러오는 데 실패했습니다.');
      } finally {
        setIsPostsLoading(false);
      }
    };
    fetchPosts();
  }, [searchQuery, currentPage, orderBy]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    const newParams = new URLSearchParams(searchParams.toString());
    if (query) {
      newParams.set('keyword', query);
      newParams.set('page', '1');
    } else {
      newParams.delete('keyword');
    }
    router.push(`/boards?${newParams.toString()}`, { scroll: false });
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('page', pageNumber.toString());
    router.push(`/boards?${newParams.toString()}`, { scroll: false });
  };

  return {
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    orderBy,
    setOrderBy,
    bestPosts,
    filteredPosts,
    totalPosts,
    isBestLoading,
    isPostsLoading,
    error,
    handleSearch,
    paginate,
  };
}
