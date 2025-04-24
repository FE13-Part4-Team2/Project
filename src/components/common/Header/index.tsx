'use client';

import IconRenderer from '@/components/common/Icons/IconRenderer';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [isTeamMenuOpen, setTeamMenuOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);

  const menuItemClass =
    'flex items-center justify-center h-[47px] w-full px-4 py-2 hover:bg-[#334155]';

  return (
    <>
      <header className="h-[60px] w-full bg-[#1E293B] px-6 py-5">
        <div className="mx-auto flex h-full w-full max-w-[1920px] items-center justify-between text-sm leading-6 text-white">
          <nav className="flex items-center justify-between">
            <IconRenderer
              name="GnbMenuIcon"
              className="tablet:hidden mr-4 block cursor-pointer"
              onClick={() => setSideMenuOpen(true)}
            />
            <Link
              href="/"
              className="desktop:w-[158px] flex w-[102px] items-center justify-between gap-0.5"
            >
              <IconRenderer name="LogoIcon" className="hover: cursor-pointer" />
              <IconRenderer name="CowrkersIcon" className="h-8 w-33" />
            </Link>

            <nav className="tablet:flex hidden items-center gap-8">
              <nav className="relative ml-8 flex gap-3">
                <Link
                  href="/team/{teamid}"
                  className="text-md font-medium hover:text-gray-700"
                >
                  경영관리팀
                </Link>
                <IconRenderer
                  name="CheckIcon"
                  className={`cursor-pointer ${isTeamMenuOpen ? 'rotate-180 transform' : ''}`}
                  onClick={() => setTeamMenuOpen((prev) => !prev)}
                />

                {isTeamMenuOpen && (
                  <div className="desktop:left-[-180px] absolute top-[45px] left-[-140px] z-50 flex w-[218px] flex-col gap-4 rounded-xl bg-[#1E293B] p-4">
                    {[
                      { name: '경영관리 팀', image: '/img/team-1.jpg' },
                      { name: '프로덕트 팀', image: '/img/team-2.jpg' },
                      { name: '마케팅 팀', image: '/img/team-3.jpg' },
                    ].map((team) => (
                      <div
                        key={team.name}
                        className="flex cursor-pointer items-center justify-between gap-2 rounded-md px-2 py-2 transition-all hover:bg-[#334155]"
                      >
                        <Image
                          src="/icon/close.svg"
                          alt=""
                          width={24}
                          height={24}
                          className="rounded-sm object-cover"
                        />
                        <span className="ml-2 flex-1 text-sm text-white">
                          {team.name}
                        </span>
                        <IconRenderer
                          name="ThreeDotsIcon"
                          className="h-4 w-4 cursor-pointer"
                        />
                      </div>
                    ))}

                    <Link href="/add-team">
                      <button className="mt-2 h-12 w-[186px] cursor-pointer rounded-md border border-white py-1 transition-all hover:bg-white hover:text-[#1E293B]">
                        + 팀 추가하기
                      </button>
                    </Link>
                  </div>
                )}
              </nav>

              <Link
                href="/boards"
                className="text-md font-medium hover:text-gray-700"
              >
                자유게시판
              </Link>
            </nav>
          </nav>

          <div className="relative">
            <button
              onClick={() => setUserDropdownOpen((prev) => !prev)}
              className="group flex cursor-pointer items-center gap-3 hover:text-gray-700"
            >
              <IconRenderer
                name="UserIcon"
                size={16}
                className="group-hover:text-gray-700"
              />
              사용자
            </button>

            {isUserDropdownOpen && (
              <div className="absolute right-0 z-50 mt-2 flex w-[135px] flex-col items-center justify-center rounded-md bg-[#1E293B] text-center text-sm text-[14px] whitespace-nowrap text-white">
                <Link
                  href="/myhistory"
                  className={`${menuItemClass} rounded-t-md`}
                  onClick={() => setUserDropdownOpen(false)}
                >
                  마이 히스토리
                </Link>
                <Link
                  href="/mypage"
                  className={menuItemClass}
                  onClick={() => setUserDropdownOpen(false)}
                >
                  계정 설정
                </Link>
                <Link
                  href="/join-team"
                  className={menuItemClass}
                  onClick={() => setUserDropdownOpen(false)}
                >
                  팀 참여
                </Link>
                <button
                  className={`${menuItemClass} cursor-pointer rounded-b-md`}
                  onClick={() => {
                    setUserDropdownOpen(false);
                  }}
                >
                  로그아웃
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {(isSideMenuOpen || isTeamMenuOpen || isUserDropdownOpen) && (
        <button
          className="fixed inset-0 z-40 cursor-default"
          onClick={() => {
            setSideMenuOpen(false);
            setTeamMenuOpen(false);
            setUserDropdownOpen(false);
          }}
        />
      )}

      {isSideMenuOpen && (
        <div
          className={`fixed top-0 left-0 z-50 h-full w-[250px] bg-[#1E293B] p-6 transition-transform duration-300 ${
            isSideMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mb-6 flex justify-end">
            <button
              onClick={() => setSideMenuOpen(false)}
              className="cursor-pointer"
            >
              <IconRenderer name="XIcon" />
            </button>
          </div>

          <ul className="flex flex-col gap-6 text-sm font-normal text-white">
            <li>
              <Link
                href="/team/{teamid}"
                onClick={() => setSideMenuOpen(false)}
                className="hover:text-green-700"
              >
                경영관리팀{' '}
              </Link>
            </li>
            <li>
              <Link
                href="/team/{teamid}"
                onClick={() => setSideMenuOpen(false)}
                className="hover:text-green-700"
              >
                프로덕트팀
              </Link>
            </li>
            <li>
              <Link
                href="/team/{teamid}"
                onClick={() => setSideMenuOpen(false)}
                className="hover:text-green-700"
              >
                마케팅팀
              </Link>
            </li>
            <li>
              <Link
                href="/team/{teamid}"
                onClick={() => setSideMenuOpen(false)}
                className="hover:text-green-700"
              >
                콘텐츠팀
              </Link>
            </li>
            <li>
              <Link
                href="/boards"
                onClick={() => setSideMenuOpen(false)}
                className="hover:text-green-700"
              >
                자유게시판
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
