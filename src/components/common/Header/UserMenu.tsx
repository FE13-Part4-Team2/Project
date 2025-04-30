'use client';

import { useState } from 'react';
import Link from 'next/link';
import IconRenderer from '@/components/common/Icons/IconRenderer';

export default function UserMenu({
  nickname,
  onLogout,
}: {
  nickname?: string;
  onLogout: () => void;
}) {
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const menuItemClass =
    'flex items-center justify-center h-[47px] w-full px-4 py-2 hover:bg-[#334155]';

  return (
    <div className="relative">
      <button
        type="button"
        className="group relative z-50 flex cursor-pointer items-center gap-3 hover:cursor-pointer hover:text-gray-700"
        onClick={() => setUserDropdownOpen((prev) => !prev)}
      >
        <IconRenderer
          name="UserIcon"
          size={16}
          className="group-hover:text-gray-700"
        />
        {nickname ?? '사용자'}
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
                onLogout();
                setUserDropdownOpen(false);
              }}
            >
              로그아웃
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
