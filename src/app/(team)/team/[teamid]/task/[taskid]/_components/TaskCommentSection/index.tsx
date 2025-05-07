'use client';

import { useState } from 'react';
import { CommentResponse } from '@/lib/apis/comment/type';
import TaskCommentCard from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskCommentSection/TaskCommentCard';
import TaskCommentInput from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskCommentSection/TaskCommentInput';
import EditableTaskCommentCard from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskCommentSection/EditableTaskCommentCard';

export default function TaskCommentSection({
  items,
}: {
  items: CommentResponse[];
}) {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <TaskCommentInput />
      <div className="flex flex-col gap-4">
        {items.map((item) =>
          !isEditMode ? (
            <TaskCommentCard
              key={item.id}
              {...item}
              enterCommentEditMode={() => setIsEditMode(true)}
            />
          ) : (
            <EditableTaskCommentCard
              key={item.id}
              {...item}
              exitCommentEditMode={() => setIsEditMode(false)}
            />
          )
        )}
      </div>
    </div>
  );
}
