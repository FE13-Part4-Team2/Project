import DropDown from '@/components/common/Dropdown';
import CommentMenuButton from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskCommentSection/TaskCommentCard/CommentMenu/CommentMenuButton';
import { deleteTaskComment } from '@/lib/apis/comment';

export default function CommentMenu({
  commentId,
  enterCommentEditMode,
}: {
  commentId: number;
  enterCommentEditMode: () => void;
}) {
  const handleDeleteComment = async () => {
    try {
      await deleteTaskComment({ commentId, tag: ['task-comment'] });
    } catch (error) {
      console.log('Failed to delete the comment on the task :', error);
    }
  };

  return (
    <DropDown>
      <DropDown.Trigger>
        <CommentMenuButton />
      </DropDown.Trigger>
      <DropDown.Menu align="right">
        <DropDown.Item onClick={enterCommentEditMode}>수정하기</DropDown.Item>
        <DropDown.Item onClick={handleDeleteComment}>삭제하기</DropDown.Item>
      </DropDown.Menu>
    </DropDown>
  );
}
