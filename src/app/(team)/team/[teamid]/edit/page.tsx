'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import clientFetcher from '@/lib/client/fetcher.client';
import { patchGroupById, deleteGroupById } from '@/lib/apis/group';
import postImage from '@/lib/apis/uploadImage';
import { UserGroupResponse } from '@/lib/apis/user/type';
import { ROUTES } from '@/constants/routes';
import TeamProfileForm from '@/app/(team)/_components/TeamProfileForm';
import { useModalStore } from '@/store/useModalStore';

export default function EditTeamPage() {
  const router = useRouter();
  const { teamid } = useParams();
  const [existingNames, setExistingNames] = useState<string[]>([]);
  const [initialName, setInitialName] = useState('');
  const [initialPreview, setInitialPreview] = useState('');

  const { openModal } = useModalStore();

  const handleDelete = async () => {
    await deleteGroupById({ groupId: Number(teamid) });
    router.push(ROUTES.HOME);
  };

  const openDeleteTaskModal = () => {
    openModal({
      variant: 'danger',
      title: `'${initialName}'\n팀을 정말 삭제하시겠어요?`,
      description: '삭제 후에는 되돌릴 수 없습니다.',
      button: {
        number: 2,
        text: '삭제하기',
        onRequest: () => {
          handleDelete();
        },
      },
    });
  };

  useEffect(() => {
    clientFetcher<undefined, UserGroupResponse[]>({
      url: '/user/groups',
      method: 'GET',
    }).then((data) => {
      if (data) {
        const names = data.map((g) => g.name).filter((n) => n !== initialName);
        setExistingNames(names);
      }
    });

    clientFetcher<undefined, { name: string; image?: string }>({
      url: `/groups/${teamid}`,
      method: 'GET',
    }).then((data) => {
      if (data) {
        setInitialName(data.name);
        setInitialPreview(data.image ?? '');
      }
    });
  }, [teamid, initialName]);

  const handleEdit = async ({ name, file }: { name: string; file?: File }) => {
    let imageUrl = initialPreview;

    if (file) {
      imageUrl = await postImage(file);
    }

    await patchGroupById({
      groupId: Number(teamid),
      body: {
        name,
        ...(imageUrl ? { image: imageUrl } : {}),
      },
    });
    router.replace(ROUTES.TEAM(Number(teamid)));
    router.push(ROUTES.TEAM(Number(teamid)));
  };

  return (
    <div className="flex h-full w-full justify-center pt-50">
      <div className="flex flex-col items-center">
        <TeamProfileForm
          existingNames={existingNames}
          initialName={initialName}
          initialPreview={initialPreview}
          submitLabel="팀 수정하기"
          onSubmit={handleEdit}
        />
        <button
          onClick={openDeleteTaskModal}
          className="mt-6 text-red-500 hover:underline"
        >
          팀 삭제하기
        </button>
      </div>
    </div>
  );
}
