import { useState, useEffect } from 'react';
import { getGroupById } from '@/lib/apis/group';
import { GroupResponse } from '@/lib/apis/group/type';
import { toast } from 'react-toastify';
import { groupError } from '@/constants/errorMessage';

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
        console.error(groupError, err);
        toast.error(groupError, {
          toastId: 'group-fetch-error', // 중복 표시 방지
        });
      }
    };
    fetchGroup();
  }, [groupId]);

  return { group, error };
}
