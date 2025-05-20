'use client';
import ArticleForm from '@/app/(board)/article/_components/ArticleForm';

export default function AddArticlePage() {
  const handleSubmit = () => {
    console.log('게시글 작성 완료');
  };

  return <ArticleForm title="게시글 쓰기" onSubmit={handleSubmit} />;
}
