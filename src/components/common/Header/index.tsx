'use client';

// 모바일 사이드메뉴에 edit 아이콘
// 로그아웃 누르면 토스트
import { useState } from 'react';
import Logo from './Logo';
import TeamMenu from './TeamMenu';
import UserMenu from './UserMenu';
import SideMenu from './SideMenu';
import { useUserStore } from '@/store/useUserstore';
import Link from 'next/link';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '@/hooks/useAuth';
import { useMemberships } from '@/hooks/useMemberships';

export default function Header() {
  const isLogin = useAuth();
  const logout = useUserStore((s) => s.logout);
  const user = useUserStore((s) => s.user);

  const { memberships, selectedGroup, setSelectedGroup } = useMemberships();
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const logoHref = selectedGroup ? `/team/${selectedGroup.id}` : '/no-team';

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
        memberships={memberships}
      />

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
