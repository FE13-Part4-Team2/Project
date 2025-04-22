'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="h-[60px] w-full border-b border-gray-100 bg-[#1E293B] px-6 py-5">
      <div className="mx-auto flex h-full w-full max-w-[1920px] items-center justify-between text-sm leading-6 text-amber-50">
        <nav className="flex items-center justify-between gap-[40px]">
          <img src="/icon/gnb-menu.svg" className="block md:hidden" />
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
            <nav className="ml-8 flex gap-3">
              <Link
                href="/wikilist"
                className="text-md font-medium hover:text-gray-400"
              >
                경영관리팀
              </Link>
              <img src="/icon/check.svg" />
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
