import { CommentResponse } from '@/lib/apis/comment/type';
import TaskCommentCard from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskCommentSection/TaskCommentCard';
import TaskCommentInput from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskCommentSection/TaskCommentInput';

export default function TaskCommentSection({
  items,
}: {
  items: CommentResponse[];
}) {
  return (
    <div className="flex flex-col gap-6">
      <TaskCommentInput />
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <TaskCommentCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
