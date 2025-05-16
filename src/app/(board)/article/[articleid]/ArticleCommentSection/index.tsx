import ArticleCommentList from '@/app/(board)/article/[articleid]/ArticleCommentSection/ArticleCommentList';

export default function ArticleCommentSection({
  articleId,
}: {
  articleId: number;
}) {
  return <ArticleCommentList articleId={articleId} />;
}
