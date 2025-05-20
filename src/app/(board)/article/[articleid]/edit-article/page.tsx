'use client';
import ArticleForm from '@/app/(board)/article/_components/ArticleForm';

export default function EditArticlePage() {
  const handleSubmit = () => {
    console.log('게시글 편집 완료');
  };

  // 실제 데이터로 대체 할 것
  const initialTitle = '기존 제목';
  const initialContents = '기존 내용';

  return (
    <ArticleForm
      title="게시글 편집"
      initialTitle={initialTitle}
      initialContents={initialContents}
      onSubmit={handleSubmit}
    />
  );
}
