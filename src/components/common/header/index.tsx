'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="h-[79px] w-full border-b border-gray-100 bg-[#1E293B] shadow-sm">
      <div className="mx-auto flex h-full w-full max-w-[1920px] items-center justify-between px-5 py-2.5 text-sm leading-6 lg:px-[80px] lg:py-[20px]">
        <nav className="mr-[165px] flex items-center justify-between gap-[40px]">
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

          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/wikilist"
              className="text-md font-medium hover:text-gray-400"
            >
              경영관리팀
            </Link>
            <Link
              href="/boards"
              className="text-md font-medium hover:text-gray-400"
            >
              자유게시판
            </Link>
          </nav>
        </nav>

        <button onClick={toggleMenu}>
          <img
            src="/icon/user.svg"
            className="cursor-pointer hover:text-green-300"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
