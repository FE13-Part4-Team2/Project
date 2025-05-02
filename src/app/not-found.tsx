'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { signIn } from '@/lib/apis/auth';
import type { AuthBody, AuthResponse } from '@/lib/apis/auth/type';
import { useUserStore } from '@/store/useUserstore';

export default function NotFound() {
  const router = useRouter();
  const saveUser = useUserStore((s) => s.saveUser);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res: AuthResponse | null = await signIn({
        email,
        password,
      } as AuthBody);
      if (res?.accessToken && res.user) {
        Cookies.set('accessToken', res.accessToken, { path: '/' });
        saveUser(res.user);
        router.push('/');
      } else {
        setError('이메일 또는 비밀번호가 잘못되었습니다.');
      }
    } catch (err) {
      console.error(err);
      setError('로그인 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-lg p-6 shadow"
      >
        <h2 className="mb-6 text-center text-2xl font-semibold">로그인</h2>

        {error && (
          <p className="mb-4 text-center text-sm text-red-500">{error}</p>
        )}

        <div className="mb-4">
          <label htmlFor="email" className="mb-1 block text-sm">
            이메일
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="mb-1 block text-sm">
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-blue-600 py-2 text-white transition hover:bg-blue-700"
        >
          {loading ? '로딩 중...' : '로그인'}
        </button>

        <div className="mt-4 text-center">
          <Link
            href="/signup"
            className="text-sm text-blue-600 hover:underline"
          >
            회원가입
          </Link>
        </div>
      </form>
    </div>
  );
}
