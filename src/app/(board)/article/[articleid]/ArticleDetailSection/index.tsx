import { ArticleResponse } from '@/lib/apis/article/type';
import WriterInfo from '@/components/user/WriterInfo';
import DateInfo from '@/app/(board)/article/[articleid]/ArticleDetailSection/DateInfo';
import CommentInfo from '@/app/(board)/article/[articleid]/ArticleDetailSection/CommentInfo';

export default function ArticleDetailSection({
  id,
  title,
  image,
  createdAt,
  writer,
  content,
  likeCount,
  isLiked,
  commentCount,
}: ArticleResponse) {
  // 아직 사용하지 않은 값들 임시로 콘솔에 출력
  console.log(id, image, likeCount, isLiked);
  return (
    <div className="tablet:min-h-[312px] flex min-h-[242px] flex-col gap-6">
      <div>
        <div className="flex h-16 items-center justify-between border-b border-slate-50/10">
          <div className="text-2lg-bold tablet:text-xl-bold">{title}</div>
          <div>메뉴</div>
        </div>
        <div className="laptop:h-16 flex h-[72px] items-center justify-between">
          <div className="flex items-center gap-4">
            {writer && <WriterInfo {...writer} />}
            <div className="h-3 border border-slate-700"></div>
            {createdAt && <DateInfo date={createdAt} />}
          </div>
          <div className="flex gap-4">
            {commentCount !== undefined && (
              <CommentInfo commentCount={commentCount} />
            )}
            <div>좋아요</div>
          </div>
        </div>
      </div>
      <div className="text-md-regular tablet:text-lg-medium">{content}</div>
    </div>
  );
}
