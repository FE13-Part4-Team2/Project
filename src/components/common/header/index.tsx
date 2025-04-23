'use client';

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
      <header className="h-[60px] w-full border-b border-gray-100 bg-[#1E293B] px-6 py-5">
        <div className="mx-auto flex h-full w-full max-w-[1920px] items-center justify-between text-sm leading-6 text-white">
          <nav className="flex items-center justify-between gap-[40px]">
            <img
              src="/icon/gnb_menu.svg"
              className="tablet:hidden block cursor-pointer"
              onClick={() => setSideMenuOpen(true)}
            />
            <Link
              href="/"
              className="flex w-[107px] items-center justify-between gap-0.5"
            >
              <img
                src="icon/logo.svg"
                alt="Logo"
                className="h-8 cursor-pointer"
              />
              <img src="icon/coworkers.svg" />
            </Link>

            <nav className="tablet:flex hidden items-center gap-8">
              <nav className="relative ml-8 flex gap-3">
                <Link
                  href="/team/{teamid}"
                  className="text-md font-medium hover:text-gray-700"
                >
                  경영관리팀
                </Link>
                <img
                  src="/icon/check.svg"
                  className={`cursor-pointer ${isTeamMenuOpen ? 'rotate-180 transform' : ''}`}
                  onClick={() => setTeamMenuOpen((prev) => !prev)}
                />

                {isTeamMenuOpen && (
                  <div className="absolute top-[45px] left-[-170px] z-50 flex w-[218px] flex-col gap-4 rounded-xl bg-[#1E293B] p-4">
                    {[
                      { name: '경영관리 팀', image: '/img/team-1.jpg' },
                      { name: '프로덕트 팀', image: '/img/team-2.jpg' },
                      { name: '마케팅 팀', image: '/img/team-3.jpg' },
                    ].map((team) => (
                      <div
                        key={team.name}
                        className="flex cursor-pointer items-center justify-between gap-2 rounded-md px-2 py-2 transition-all hover:bg-[#334155]"
                      >
                        <img
                          src={team.image}
                          className="h-6 w-6 rounded-sm object-cover"
                        />
                        <span className="ml-2 flex-1 text-sm text-white">
                          {team.name}
                        </span>
                        <img
                          src="/icon/three_dots.svg"
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
              className="ml-[20] flex cursor-pointer gap-3 hover:text-amber-100"
            >
              <img src="/icon/user.svg" className="" />
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
        <div
          className="fixed inset-0 z-40"
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
              <img src="/icon/close.svg" className="h-5 w-5" />
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
