import { useState, useEffect } from 'react';
import { getGroupById } from '@/lib/apis/group';
import { GroupResponse } from '@/lib/apis/group/type';
import { toast } from 'react-toastify';

export function useGroup(groupId: number) {
  const [group, setGroup] = useState<GroupResponse | null>(null);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const res = await getGroupById({ groupId });
        setGroup(res);
      } catch (err) {
        setError(err);
        console.error('팀 정보 로드 실패', error);
        toast.error('팀 정보 로드에 실패했습니다.');
      }
    };
    fetchGroup();
  }, [groupId]);

  return { group, error };
}
