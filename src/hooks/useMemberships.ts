'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/hooks/useAuth';
import type { UserMembershipResponse } from '@/lib/apis/user/type';
import { fetchWithRefresh } from '@/utils/fetchWithRefresh';

async function fetchMemberships(): Promise<UserMembershipResponse[]> {
  const res = await fetchWithRefresh(
    `${process.env.NEXT_PUBLIC_API_URL}/user`,
    { cache: 'no-store' }
  );
  if (!res.ok) throw new Error('멤버십 조회 실패');
  const data: { memberships: UserMembershipResponse[] } = await res.json();
  return data.memberships ?? [];
}

export function useMemberships() {
  const isLogin = useAuth();

  const {
    data: memberships = [],
    refetch,
    isLoading,
    isError,
  } = useQuery<UserMembershipResponse[]>({
    queryKey: ['memberships'],
    queryFn: fetchMemberships,
    enabled: isLogin,
    staleTime: 1000 * 60 * 5,
  });

  const [selectedGroup, setSelectedGroup] = useState<
    UserMembershipResponse['group'] | null
  >(null);

  useEffect(() => {
    if (!selectedGroup && memberships.length > 0) {
      setSelectedGroup(memberships[0].group);
    }
  }, [memberships, selectedGroup]);

  useEffect(() => {
    if (isLogin) {
      refetch();
    }
  }, [isLogin, refetch]);

  return {
    memberships,
    selectedGroup,
    setSelectedGroup,
    refetch,
    isLoading,
    isError,
  };
}
