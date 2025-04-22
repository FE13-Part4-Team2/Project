'use client';

import { toast } from 'react-toastify';
import { deleteGroup } from '@/lib/apis/group';

export default function DeleteTeamButton() {
  const groupId = 2202;

  const handleDeleteTeam = async () => {
    try {
      await deleteGroup(groupId);

      toast.success('팀 삭제 성공');
    } catch (error) {
      toast.error('팀 삭제 실패');
    }
  };

  return (
    <button
      type="button"
      onClick={handleDeleteTeam}
      className="bg-[#000000] text-[#ffffffff]"
    >
      팀 삭제
    </button>
  );
}
