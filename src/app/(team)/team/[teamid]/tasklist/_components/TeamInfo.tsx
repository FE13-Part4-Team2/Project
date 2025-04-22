import { cookies } from 'next/headers';
import { getGroup } from '@/lib/apis/group';

export default async function TeamInfo() {
  const token = cookies().get('accessToken')?.value ?? '';
  const groupId = 2200;

  const { id } = await getGroup({ groupId, token });

  return <div>{id}</div>;
}
