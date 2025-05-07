import { useState } from 'react';
import { CommentResponse } from '@/lib/apis/comment/type';
import Button from '@/components/common/Button';

export default function EditableTaskCommentCard({
  content,
  exitCommentEditMode,
}: CommentResponse & {
  exitCommentEditMode: () => void;
}) {
  const [editedComment, setEditedComment] = useState(content);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedComment(e.target.value);
  };

  const isEditValid = editedComment.trim() !== '' && editedComment !== content;

  return (
    <div className="flex flex-col gap-4 border-b-2 border-slate-50/10 pb-4">
      <div>
        <textarea
          value={editedComment}
          onChange={handleChange}
          className="text-md-regular w-full resize-none"
        />
      </div>
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={exitCommentEditMode}
          className="text-md-semibold px-3 py-1 text-slate-500"
        >
          취소
        </button>
        <Button
          variant="secondary"
          styleType="outlined"
          className="w-[74px]"
          radius="sm"
          size="sm"
          disabled={!isEditValid}
        >
          <div className="text-md-semibold">수정하기</div>
        </Button>
      </div>
    </div>
  );
}
