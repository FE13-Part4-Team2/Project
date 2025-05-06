import { create } from 'zustand';
import { getCookie, deleteCookie } from '@/utils/cookieUtil';
import type { UserResponse } from '@/lib/apis/user/type';

interface UserState {
  user: UserResponse | null;
  isLogin: boolean;
  saveUser: (user: UserResponse) => void;
  checkLogin: () => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLogin: false,

  saveUser: (user) => {
    set({ user, isLogin: true });
  },

  checkLogin: () => {
    const accessToken = getCookie('accessToken');
    if (accessToken) {
      set({ isLogin: true });
    } else {
      set({ user: null, isLogin: false });
    }
  },

  logout: () => {
    deleteCookie('accessToken');
    set({ user: null, isLogin: false });
  },
}));
