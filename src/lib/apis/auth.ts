import fetcher from '../fetcher';
import { LoginBody, LoginResponse } from './types/auth';

export async function postLogin(body: LoginBody): Promise<LoginResponse> {
  return fetcher<LoginBody, LoginResponse>({
    url: '/auth/signIn',
    methodType: 'POST',
    body,
  });
}
