'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCookie } from '@/utils/cookieUtill';
import type { UserMembershipResponse } from '@/lib/apis/user/type';

async function fetchMemberships(): Promise<UserMembershipResponse[]> {
  const token = getCookie('accessToken');
  if (!token) return [];
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('멤버십 조회 실패');
  const data: { memberships: UserMembershipResponse[] } = await res.json();
  return data.memberships ?? [];
}

export function useMemberships() {
  const { data: memberships = [] } = useQuery<UserMembershipResponse[]>({
    queryKey: ['memberships'],
    queryFn: fetchMemberships,
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

  return { memberships, selectedGroup, setSelectedGroup };
}
