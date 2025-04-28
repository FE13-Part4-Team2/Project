'use client';

import { useState, useEffect } from 'react';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import Image from 'next/image';
import Link from 'next/link';
import { useUserStore } from '@/store/useUserstore';
import { getUserGroups } from '@/lib/apis/user';
import { getCookie } from '@/utils/cookieUtill';
import { UserGroupResponse } from '@/lib/apis/user/type';

export default function Header() {
  const isLogin = useUserStore((s) => s.isLogin);
  const checkLogin = useUserStore((s) => s.checkLogin);
  const logout = useUserStore((s) => s.logout);

  const [groups, setGroups] = useState<UserGroupResponse[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<UserGroupResponse | null>(
    null
  );

  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [isTeamMenuOpen, setTeamMenuOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);

  const menuItemClass =
    'flex items-center justify-center h-[47px] w-full px-4 py-2 hover:bg-[#334155]';

  useEffect(() => {
    checkLogin();
  }, [checkLogin]);

  useEffect(() => {
    if (!isLogin) return;
    (async () => {
      try {
        const token = getCookie('accessToken');
        if (!token) throw new Error('No token');
        const data = await getUserGroups(token);
        setGroups(data ?? []);
      } catch (e) {
        console.error('그룹 조회 실패', e);
      }
    })();
  }, [isLogin]);

  useEffect(() => {
    if (!selectedGroup && groups.length > 0) {
      setSelectedGroup(groups[0]);
    }
  }, [groups, selectedGroup]);

  if (!isLogin) {
    return (
      <header className="h-[60px] w-full border border-slate-50/10 bg-[#1E293B] px-6 py-5">
        <div className="mx-auto flex h-full w-[1200px] max-w-[1920px] items-center justify-between text-sm leading-6 text-white">
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
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between text-sm leading-6 text-white">
          <nav className="flex items-center justify-between">
            <IconRenderer
              name="GnbMenuIcon"
              className="tablet:hidden mr-4 block cursor-pointer hover:text-gray-700"
              onClick={() => setSideMenuOpen(true)}
            />
            <Link
              href="/"
              className="desktop:w-[158px] flex w-[102px] items-center justify-between gap-0.5"
            >
              <IconRenderer name="LogoIcon" className="hover: cursor-pointer" />
              <IconRenderer name="CoworkersIcon" className="h-8 w-33" />
            </Link>

            <div className="tablet:flex hidden items-center">
              {groups.length > 0 && (
                <div className="relative ml-8 flex gap-3">
                  <Link
                    href={`/team/${selectedGroup?.id}`}
                    className="text-md font-medium hover:text-gray-700"
                  >
                    {selectedGroup?.name}
                  </Link>

                  <button
                    type="button"
                    className={`cursor-pointer hover:text-gray-700 ${
                      isTeamMenuOpen ? 'rotate-180' : ''
                    } transition-transform`}
                    onClick={() => setTeamMenuOpen((prev) => !prev)}
                  >
                    <IconRenderer name="CheckIcon" />
                  </button>

                  {isTeamMenuOpen && (
                    <div className="absolute top-[45px] left-[-140px] z-50 flex w-[218px] flex-col gap-4 rounded-xl bg-[#1E293B] p-4">
                      {groups.map((team) => (
                        <button
                          key={team.id}
                          className="flex cursor-pointer items-center justify-between gap-2 rounded-md px-2 py-2 transition-all hover:bg-[#334155]"
                          onClick={() => {
                            setSelectedGroup(team);
                            setTeamMenuOpen(false);
                          }}
                        >
                          <Image
                            src={team.image ?? '/img/default-team.jpg'}
                            alt={team.name}
                            width={24}
                            height={24}
                            className="rounded-sm object-cover"
                          />
                          <span className="ml-2 flex-1 text-sm text-white">
                            {team.name}
                          </span>
                          <IconRenderer
                            name="ThreeDotsIcon"
                            className="h-4 w-4 cursor-pointer hover:cursor-pointer"
                          />
                        </button>
                      ))}

                      <Link href="/add-team">
                        <button
                          type="button"
                          className="mt-2 h-12 w-[186px] cursor-pointer rounded-md border border-white py-1 transition-all hover:bg-white hover:text-[#1E293B]"
                        >
                          + 팀 추가하기
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              )}

              <Link
                href="/boards"
                className="text-md ml-8 font-medium hover:text-gray-700"
              >
                자유게시판
              </Link>
            </div>
          </nav>

          <div className="relative">
            <button
              type="button"
              className="group relative z-50 flex cursor-pointer items-center gap-3 hover:cursor-pointer"
              onClick={() => setUserDropdownOpen((prev) => !prev)}
            >
              <IconRenderer
                name="UserIcon"
                size={16}
                className="group-hover:text-gray-700"
              />
              사용자
            </button>

            {isUserDropdownOpen && (
              <div className="absolute right-0 z-50 mt-2 w-[135px] flex-col items-center justify-center rounded-md border border-slate-50/10 bg-slate-800 text-center text-sm text-[14px] whitespace-nowrap text-white">
                <Link href="/myhistory">
                  <button
                    type="button"
                    className={`${menuItemClass} rounded-t-md`}
                    onClick={() => setUserDropdownOpen(false)}
                  >
                    마이 히스토리
                  </button>
                </Link>
                <Link href="/mypage">
                  <button
                    type="button"
                    className={menuItemClass}
                    onClick={() => setUserDropdownOpen(false)}
                  >
                    계정 설정
                  </button>
                </Link>
                <Link href="/join-team">
                  <button
                    type="button"
                    className={menuItemClass}
                    onClick={() => setUserDropdownOpen(false)}
                  >
                    팀 참여
                  </button>
                </Link>
                <Link href="/login">
                  <button
                    type="button"
                    className={`${menuItemClass} cursor-pointer rounded-b-md`}
                    onClick={() => {
                      logout();
                      setUserDropdownOpen(false);
                    }}
                  >
                    로그아웃
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* 백드롭 */}
      {(isSideMenuOpen || isTeamMenuOpen || isUserDropdownOpen) && (
        <button
          type="button"
          className="fixed inset-0 z-40 cursor-default"
          onClick={() => {
            setSideMenuOpen(false);
            setTeamMenuOpen(false);
            setUserDropdownOpen(false);
          }}
        />
      )}

      {/* 사이드 메뉴 */}
      {isSideMenuOpen && (
        <div
          className={`fixed top-0 left-0 z-50 h-full w-[250px] border border-slate-50/10 bg-[#1E293B] p-6 transition-transform duration-300 ${
            isSideMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mb-6 flex justify-end">
            <button
              type="button"
              className="cursor-pointer hover:cursor-pointer"
              onClick={() => setSideMenuOpen(false)}
            >
              <IconRenderer name="XIcon" className="hover:text-green-100" />
            </button>
          </div>

          <ul className="flex flex-col gap-6 text-sm font-normal text-white">
            {groups.map((team) => (
              <li key={team.id}>
                <Link
                  href={`/team/${team.id}`}
                  className="hover:text-green-700"
                  onClick={() => setSideMenuOpen(false)}
                >
                  {team.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/boards"
                className="hover:text-green-700"
                onClick={() => setSideMenuOpen(false)}
              >
                자유게시판
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
