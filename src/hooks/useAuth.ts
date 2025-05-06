'use client';

import { useEffect } from 'react';
import { useUserStore } from '@/store/useUserStore';

export function useAuth() {
  const isLogin = useUserStore((s) => s.isLogin);
  const checkLogin = useUserStore((s) => s.checkLogin);

  useEffect(() => {
    checkLogin();
  }, [checkLogin]);

  return isLogin;
}
