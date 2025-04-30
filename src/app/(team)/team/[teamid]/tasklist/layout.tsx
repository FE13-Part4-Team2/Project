import { ReactNode } from 'react';

export default function Layout({
  children,
  sidePage,
}: {
  children: ReactNode;
  sidePage: ReactNode;
}) {
  return (
    <div className="relative">
      <main>{children}</main>
      <div className="tablet:w-3/5 tablet:min-w-[435px] absolute top-0 right-0 z-50 max-h-screen min-w-screen border-l border-slate-50/10 bg-slate-800">
        {sidePage}
      </div>
    </div>
  );
}
