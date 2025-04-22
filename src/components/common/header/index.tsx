'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isTeamMenuOpen, setTeamMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="h-[60px] w-full border-b border-gray-100 bg-[#1E293B] px-6 py-5">
      <div className="mx-auto flex h-full w-full max-w-[1920px] items-center justify-between text-sm leading-6 text-amber-50">
        <nav className="flex items-center justify-between gap-[40px]">
          <img src="/icon/gnb_menu.svg" className="block md:hidden" />
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

          <nav className="hidden items-center gap-8 md:flex">
            <nav className="relative ml-8 flex gap-3">
              <Link
                href="/wikilist"
                className="text-md font-medium hover:text-gray-400"
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

                  <button className="mt-2 h-12 w-[186px] rounded-md border border-white py-1 transition-all hover:bg-white hover:text-[#1E293B]">
                    + 팀 추가하기
                  </button>
                </div>
              )}
            </nav>

            <Link
              href="/boards"
              className="text-md font-medium hover:text-gray-400"
            >
              자유게시판
            </Link>
          </nav>
        </nav>

        <button
          onClick={toggleMenu}
          className="ml-[20] flex cursor-pointer gap-3 hover:text-amber-100"
        >
          <img src="/icon/user.svg" className="" />
          사용자
        </button>
      </div>
    </header>
  );
};

export default Header;
