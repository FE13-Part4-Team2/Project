'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import { UserGroupResponse } from '@/lib/apis/user/type';

export default function TeamMenu({
  groups,
  selectedGroup,
  onSelect,
}: {
  groups: UserGroupResponse[];
  selectedGroup: UserGroupResponse | null;
  onSelect: (team: UserGroupResponse) => void;
}) {
  const pathname = usePathname();
  const [isTeamMenuOpen, setTeamMenuOpen] = useState(false);

  const label = pathname.startsWith('/team/') ? selectedGroup?.name : '팀 목록';

  return (
    <div className="relative ml-8 flex gap-3">
      <Link
        href={`/team/${selectedGroup?.id}`}
        className="text-md font-medium hover:text-gray-700"
      >
        {label}
      </Link>

      <button
        type="button"
        className={`z-50 cursor-pointer hover:text-gray-700 ${
          isTeamMenuOpen ? 'rotate-180' : ''
        } transition-transform`}
        onClick={() => setTeamMenuOpen((prev) => !prev)}
      >
        <IconRenderer name="CheckIcon" className="hover:text-gray-700" />
      </button>

      {isTeamMenuOpen && (
        <div className="absolute top-[45px] left-[-140px] z-50 flex w-[218px] flex-col gap-4 rounded-xl bg-[#1E293B] p-4">
          {groups.map((team) => (
            <div
              key={team.id}
              className="flex items-center gap-x-3 rounded-md px-2 py-2"
            >
              <Link
                href={`/team/${team.id}`}
                className="flex flex-1 items-center gap-x-3 rounded-md px-2 py-2 hover:bg-[#334155]"
                onClick={() => {
                  onSelect(team);
                  setTeamMenuOpen(false);
                }}
              >
                <div className="relative h-8 w-8">
                  <Image
                    src={team.image ?? '/image/default_team_img.png'}
                    alt={team.name}
                    fill
                    unoptimized
                    className="rounded-sm object-cover"
                  />
                </div>
                <span className="text-sm text-white">{team.name}</span>
              </Link>
              <Link
                href={`/team/${team.id}/edit`}
                onClick={() => setTeamMenuOpen(false)}
              >
                <IconRenderer
                  name="EditIcon"
                  size={20}
                  className="cursor-pointer hover:text-green-700"
                />
              </Link>
            </div>
          ))}

          <Link href="/add-team">
            <button
              type="button"
              className="mt-2 h-12 w-[186px] cursor-pointer rounded-md border border-white py-1 transition-all hover:bg-white hover:text-[#1E293B]"
              onClick={() => setTeamMenuOpen(false)}
            >
              + 팀 추가하기
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
