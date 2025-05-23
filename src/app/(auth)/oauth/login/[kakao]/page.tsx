import { ROUTES } from '@/constants/routes';
import { postOAuth } from '@/lib/apis/auth';
import { getUserGroups } from '@/lib/apis/user';
import Cookies from 'js-cookie';
import { redirect } from 'next/navigation';

export default async function KakaoLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // code, state 를 추출해서 POST 요청
  const { code, state } = await searchParams;
  const responseBody = {
    state: state as string,
    redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI as string,
    token: code as string,
  };

  const handleOAuthLogin = async () => {
    try {
      const response = await postOAuth({ body: responseBody });
      console.log('OAuth response:', response);
      if (!response) {
        throw new Error('Oauth API 응답 없음');
      }
      const { accessToken, refreshToken, user } = response;

      // TODO : Set-Cookies 헤더로 쿠키 설정 필요
      // 서버 컴포넌트에서 js-cookie 사용 불가
      Cookies.set('accessToken', accessToken, {
        path: '/',
        secure: true,
        sameSite: 'Strict',
      });
      Cookies.set('refreshToken', refreshToken, {
        path: '/',
        secure: true,
        sameSite: 'Strict',
      });
      Cookies.set('userId', user.id.toString(), {
        path: '/',
        secure: true,
        sameSite: 'Strict',
      });

      const userGroupsData = await getUserGroups({});
      const firstGroupId = userGroupsData?.[0]?.id;

      if (firstGroupId) {
        redirect(ROUTES.TEAM(firstGroupId));
      } else {
        redirect(ROUTES.TEAM_NO);
      }
    } catch (error) {
      console.error('Error during OAuth login:', error);
    }
  };

  handleOAuthLogin();

  return <div>LoginPage</div>;
}
