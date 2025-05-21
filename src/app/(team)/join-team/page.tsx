'use client';

import JoinTeamForm from '@/app/(team)/_components/JoinTeamForm';
import { ROUTES } from '@/constants/routes';
import { useMemberships } from '@/hooks/useMemberships';
import { postGroupInvitation } from '@/lib/apis/group';
import { useRouter } from 'next/navigation';

export default function JoinTeamPage() {
  const router = useRouter();
  const { memberships } = useMemberships(true);

  const handleJoin = async (link: string) => {
    const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/;
    if (!jwtRegex.test(link)) {
      throw new Error('유효한 링크가 아닙니다.');
    }

    const email = memberships[0]?.userEmail;
    if (!email) {
      throw new Error('유저 정보를 불러올 수 없습니다.');
    }

    const res = await postGroupInvitation({
      body: { token: link, userEmail: email },
    });

    if (res?.groupId == null) {
      throw new Error(res?.message || '초대 수락에 실패했습니다.');
    }

    router.push(ROUTES.TEAM(res.groupId));
  };

  return (
    <div className="flex w-full justify-center pt-35">
      <JoinTeamForm onSubmit={handleJoin} />
    </div>
  );
}
