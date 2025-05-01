'use client';

import { useState, useEffect } from 'react';
import { getCookie } from '@/utils/cookieUtill';
import type { UserMembershipResponse } from '@/lib/apis/user/type';

export function useMemberships() {
  const [memberships, setMemberships] = useState<UserMembershipResponse[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<
    UserMembershipResponse['group'] | null
  >(null);

  useEffect(() => {
    (async () => {
      const token = getCookie('accessToken');
      if (!token) return;
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
        headers: { Authorization: `Bearer ${token}` },
        cache: 'no-store',
      });
      if (!res.ok) return;
      const userData: { memberships: UserMembershipResponse[] } =
        await res.json();
      setMemberships(userData.memberships ?? []);
    })();
  }, []);

  useEffect(() => {
    if (!selectedGroup && memberships.length > 0) {
      setSelectedGroup(memberships[0].group);
    }
  }, [memberships, selectedGroup]);

  return { memberships, selectedGroup, setSelectedGroup };
}
