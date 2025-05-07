'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import Image from 'next/image';
import clsx from 'clsx';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import DropDown from '@/components/common/Dropdown';

const title = '경영관리팀';

const TeamBanner = () => {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={clsx(
        'relative flex items-center justify-between p-6',
        'laptop:w-[1200px]',
        'tablet:w-[696px]',
        'h-[64px] w-[343px]',
        'rounded-[12px] border border-slate-50/10 bg-[#272e3f]',
        'text-xl-bold'
      )}
    >
      <Image
        src="/image/team_banner_pattern.svg"
        alt="팀 배너 배경 패턴 이미지"
        width={181}
        height={64}
        className="tablet:left-[75%] absolute left-1/2 -translate-x-1/2"
      />
      {title}
      <IconRenderer
        onClick={openMenu}
        name="GearIcon"
        className="cursor-pointer"
      />
      <DropDown handleClose={closeMenu}>
        <DropDown.Menu>
          <DropDown.Item onClick={() => router.push('/')}>
            수정하기
          </DropDown.Item>
          <DropDown.Item onClick={() => router.push('/')}>
            삭제하기
          </DropDown.Item>
        </DropDown.Menu>
      </DropDown>
    </div>
  );
};

export default TeamBanner;
