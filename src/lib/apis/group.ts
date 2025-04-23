import Cookies from 'js-cookie';

import {
  GetGroupResponse,
  PostGroupBody,
  PostGroupResponse,
} from '@/lib/apis/types/group';

import fetcher from '../fetcher';

export async function getGroup({
  groupId,
  token,
}: {
  groupId: number;
  token: string;
}): Promise<GetGroupResponse> {
  return fetcher<undefined, GetGroupResponse>({
    url: `/groups/${groupId}`,
    methodType: 'GET',
    token,
  });
}

export async function postGroup(
  body: PostGroupBody
): Promise<PostGroupResponse> {
  const token = Cookies.get('accessToken');
  return fetcher<PostGroupBody, PostGroupResponse>({
    url: '/groups',
    methodType: 'POST',
    token,
    body,
  });
}

export async function deleteGroup(groupId: number): Promise<null> {
  const token = Cookies.get('accessToken');
  return fetcher<undefined, null>({
    url: `/groups/${groupId}`,
    methodType: 'DELETE',
    token,
  });
}
