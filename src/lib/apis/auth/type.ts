interface User {
  id: number;
  nickname: string;
  createdAt: string;
  updatedAt: string;
  image: string | null;
  teamId: string;
  email: string;
}

export interface OAuthAppBody {
  appSecret: '클라이언트 id';
  appKey: '';
  provider: 'KAKAO';
}

export interface OAuthAppResponse {
  id: number;
  provider: 'KAKAO';
  teamId: string;
  appKey: '';
  appSecret: '클라이언트 id';
  createdAt: string;
  updatedAt: string;
}

export interface OAuthBody {
  state: string;
  redirectUri: string;
  token: string;
}

export interface AuthBody {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}
