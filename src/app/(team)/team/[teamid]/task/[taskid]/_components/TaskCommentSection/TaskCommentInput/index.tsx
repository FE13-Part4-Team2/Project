import { useState } from 'react';
import { useParams } from 'next/navigation';
import { postTaskComment } from '@/lib/apis/comment';
import AutoResizeTextarea from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskCommentSection/AutoResizeTextarea';

export default function TaskCommentInput() {
  const [comment, setComment] = useState('');
  const params = useParams();

  const taskId = Number(params.taskid);

  const handleSubmitComment = async () => {
    try {
      await postTaskComment({
        taskId,
        body: { content: comment },
        tag: ['task-comment'],
      });
    } catch (error) {
      console.log('Failed to update the comment on the task :', error);
    }
  };

  return (
    <div className="border-y-2 border-slate-50/10 pt-6 pb-4">
      <AutoResizeTextarea
        value={comment}
        placeholder="댓글을 달아주세요"
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
    </div>
  );
}
