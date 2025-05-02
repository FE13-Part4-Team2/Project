'use client';

import Link from 'next/link';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import type { UserMembershipResponse } from '@/lib/apis/user/type';

export default function SideMenu({
  isSideMenuOpen,
  onClose,
  memberships,
}: {
  isSideMenuOpen: boolean;
  onClose: () => void;
  memberships: UserMembershipResponse[];
}) {
  return (
    <>
      {isSideMenuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 cursor-default"
            onClick={onClose}
          />

          <div
            className={`fixed top-0 left-0 z-50 h-full w-[250px] border border-slate-50/10 bg-[#1E293B] p-6 transition-transform duration-300 ${isSideMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="mb-6 flex justify-end">
              <button
                type="button"
                className="cursor-pointer hover:cursor-pointer"
                onClick={onClose}
              >
                <IconRenderer name="XIcon" className="hover:text-green-100" />
              </button>
            </div>

            <ul className="flex flex-col gap-6 text-sm font-normal text-white">
              {memberships.map(({ group, role }) => (
                <li
                  key={group.id}
                  className="flex items-center justify-between"
                >
                  <Link
                    href={`/team/${group.id}`}
                    className="hover:text-green-700"
                    onClick={onClose}
                  >
                    {group.name}
                  </Link>

                  {role === 'ADMIN' && (
                    <Link
                      href={`/team/${group.id}/edit`}
                      onClick={onClose}
                      className="ml-2"
                    >
                      <IconRenderer
                        name="EditIcon"
                        size={20}
                        className="hover:text-green-700"
                      />
                    </Link>
                  )}
                </li>
              ))}

              <li>
                <Link
                  href="/boards"
                  className="hover:text-green-700"
                  onClick={onClose}
                >
                  자유게시판
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
