'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { signIn } from '@/lib/apis/auth';
import { useUserStore } from '@/store/useUserstore';

export default function LoginPage() {
  const router = useRouter();
  const saveUser = useUserStore((s) => s.saveUser);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await signIn({ email, password });
      if (res?.accessToken && res.user) {
        Cookies.set('accessToken', res.accessToken, { path: '/' });
        saveUser(res.user);
        router.push('/');
      } else {
        alert('로그인 실패');
      }
    } catch {
      alert('오류 발생');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded p-6 shadow"
      >
        <h2 className="mb-4 text-center text-2xl font-semibold">로그인</h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
          required
          className="mb-3 w-full rounded border px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          required
          className="mb-4 w-full rounded border px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />

        <button
          type="submit"
          className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
        >
          로그인
        </button>
      </form>
    </div>
  );
}
