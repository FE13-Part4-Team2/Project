'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import clientFetcher from '@/lib/client/fetcher.client';
import { postGroup } from '@/lib/apis/group';
import postImage from '@/lib/apis/uploadImage';
import { UserGroupResponse } from '@/lib/apis/user/type';
import { ROUTES } from '@/constants/routes';
import TeamProfileForm from '@/app/(team)/_components/TeamProfileForm';

export default function AddTeamPage() {
  const router = useRouter();
  const [existingNames, setExistingNames] = useState<string[]>([]);

  useEffect(() => {
    clientFetcher<undefined, UserGroupResponse[]>({
      url: '/user/groups',
      method: 'GET',
    }).then((data) => {
      if (data) setExistingNames(data.map((g) => g.name));
    });
  }, []);

  const handleCreate = async ({
    name,
    file,
  }: {
    name: string;
    file?: File;
  }) => {
    let imageUrl: string | undefined;
    if (file) {
      imageUrl = await postImage(file);
    }
    const newGroup = await postGroup({
      body: {
        name,
        ...(imageUrl ? { image: imageUrl } : {}),
      },
    });
    if (newGroup?.id) {
      router.push(ROUTES.TEAM(newGroup.id));
    }
  };

  return (
    <div className="flex h-full w-full justify-center pt-50">
      <TeamProfileForm
        existingNames={existingNames}
        initialName=""
        initialPreview=""
        submitLabel="팀 생성하기"
        onSubmit={handleCreate}
      />
    </div>
  );
}
