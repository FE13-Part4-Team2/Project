'use client';

import { toast } from 'react-toastify';
import { postGroup } from '@/lib/apis/group';

export default function CreateTeamButton() {
  const handleCreateTeam = async () => {
    try {
      const { id } = await postGroup({
        name: 'Test',
      });

      toast.success(id);
    } catch (error) {
      toast.error('팀 생성 실패');
    }
  };

  return (
    <button
      type="button"
      onClick={handleCreateTeam}
      className="bg-[#000000] text-[#ffffffff]"
    >
      팀 생성
    </button>
  );
}
