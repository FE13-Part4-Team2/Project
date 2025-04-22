import { LoginBody, LoginResponse } from './../../types/auth';
import fetcher from '../fetcher';

export async function postLogin(body: LoginBody): Promise<LoginResponse> {
  return fetcher<LoginBody, LoginResponse>({
    url: '/auth/signIn',
    methodType: 'POST',
    body,
  });
}
