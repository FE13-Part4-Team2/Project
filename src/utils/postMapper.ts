import { ArticleResponse } from '@/lib/apis/article/type';

export type Post = {
  id: number;
  title: string;
  date: string;
  username: string;
  likes: number;
  image?: string | null;
};

export function mapArticleToPost(article: ArticleResponse): Post {
  return {
    id: article.id,
    title: article.title || '제목 없음',
    date: article.createdAt
      ? new Date(article.createdAt).toLocaleDateString('ko-KR')
      : '날짜 없음',
    username: article.writer?.nickname || '아로니', //임시 이름 나중에 바꾸기
    likes: article.likeCount || 0,
    image: article.image,
  };
}
