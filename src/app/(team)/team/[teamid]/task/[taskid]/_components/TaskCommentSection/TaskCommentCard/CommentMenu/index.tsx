import DropDown from '@/components/common/Dropdown';
import CommentMenuButton from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskCommentSection/TaskCommentCard/CommentMenu/CommentMenuButton';

export default function CommentMenu() {
  const openEditComment = () => console.log('수정하기');
  const handleDeleteComment = () => console.log('삭제하기');

  return (
    <DropDown>
      <DropDown.Trigger>
        <CommentMenuButton />
      </DropDown.Trigger>
      <DropDown.Menu align="right">
        <DropDown.Item onClick={openEditComment}>수정하기</DropDown.Item>
        <DropDown.Item onClick={handleDeleteComment}>삭제하기</DropDown.Item>
      </DropDown.Menu>
    </DropDown>
  );
}
