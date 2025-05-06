import Cookies from 'js-cookie';
import { getCookie } from '@/utils/cookieUtil';

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

async function refreshAccessToken() {
  const refreshToken = getCookie('refreshToken');
  if (!refreshToken) throw new Error('No refresh token');

  const res = await fetch(`${API_URL}/auth/refresh-token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  });
  if (!res.ok) throw new Error('Refresh token failed');
  const { accessToken: newToken } = await res.json();
  Cookies.set('accessToken', newToken, { path: '/' });
  return newToken as string;
}

export async function fetchWithRefresh(
  input: RequestInfo,
  init: RequestInit = {}
) {
  let token = getCookie('accessToken');
  const headers = {
    'Content-Type': 'application/json',
    ...(init.headers as object),
    Authorization: token ? `Bearer ${token}` : '',
  };

  let res = await fetch(input, { ...init, headers });
  if (res.status === 401) {
    token = await refreshAccessToken();

    res = await fetch(input, {
      ...init,
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return res;
}
