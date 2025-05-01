'use client';

// 수정 아이콘은 관리자일 경우만
// 로그아웃 누르면 토스트
import { useState, useEffect } from 'react';
import Logo from './Logo';
import TeamMenu from './TeamMenu';
import UserMenu from './UserMenu';
import SideMenu from './SideMenu';
import { useUserStore } from '@/store/useUserstore';
import { getCookie } from '@/utils/cookieUtill';
import { UserMembershipResponse } from '@/lib/apis/user/type';
import Link from 'next/link';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Header() {
  const isLogin = useUserStore((s) => s.isLogin);
  const checkLogin = useUserStore((s) => s.checkLogin);
  const logout = useUserStore((s) => s.logout);
  const user = useUserStore((s) => s.user);

  const [memberships, setMemberships] = useState<UserMembershipResponse[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<
    UserMembershipResponse['group'] | null
  >(null);
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  // derive plain groups array from memberships
  const groups = memberships.map((m) => m.group);

  useEffect(() => {
    checkLogin();
  }, [checkLogin]);

  // 함수 분리 예정
  useEffect(() => {
    if (!isLogin) return;
    (async () => {
      const token = getCookie('accessToken');
      if (!token) return;
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
        headers: { Authorization: `Bearer ${token}` },
        cache: 'no-store',
      });
      if (!res.ok) return;
      const userData: { memberships: UserMembershipResponse[] } =
        await res.json();
      setMemberships(userData.memberships ?? []);
    })();
  }, [isLogin]);

  useEffect(() => {
    if (!selectedGroup && memberships.length > 0) {
      setSelectedGroup(memberships[0].group);
    }
  }, [memberships, selectedGroup]);

  const handleLogout = () => {
    logout();
    toast.success('로그아웃되었습니다');
  };

  if (!isLogin) {
    return (
      <header className="h-[60px] w-full border border-slate-50/10 bg-[#1E293B] px-6 py-5">
        <div className="text-md-medium mx-auto flex h-full w-[1200px] max-w-[1920px] items-center justify-between leading-6 text-white">
          <Link
            href="/"
            className="desktop:w-[158px] flex w-[102px] items-center justify-between gap-0.5"
          >
            <IconRenderer name="LogoIcon" className="hover: cursor-pointer" />
            <IconRenderer name="CoworkersIcon" className="h-8 w-33" />
          </Link>
        </div>
      </header>
    );
  }

  const logoHref = selectedGroup ? `/team/${selectedGroup.id}` : '/no-team';

  return (
    <>
      <header className="h-[60px] w-full border border-slate-50/10 bg-[#1E293B] px-6 py-5">
        <div className="text-lg-medium mx-auto flex h-full max-w-[1200px] items-center justify-between leading-6 text-white">
          <nav className="flex items-center justify-between">
            <IconRenderer
              name="GnbMenuIcon"
              className="tablet:hidden mr-4 block cursor-pointer hover:text-gray-700"
              onClick={() => setSideMenuOpen(true)}
            />
            <Logo href={logoHref} />

            <div className="tablet:flex hidden items-center">
              {memberships.length > 0 && selectedGroup && (
                <TeamMenu
                  memberships={memberships}
                  selectedGroup={selectedGroup}
                  onSelect={setSelectedGroup}
                />
              )}
              <Link
                href="/boards"
                className="text-md ml-8 font-medium hover:text-gray-700"
              >
                자유게시판
              </Link>
            </div>
          </nav>

          <UserMenu nickname={user?.nickname} onLogout={handleLogout} />
        </div>
      </header>

      <SideMenu
        isSideMenuOpen={isSideMenuOpen}
        onClose={() => setSideMenuOpen(false)}
        groups={groups}
      />

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
