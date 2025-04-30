'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function SidePage({ children }: { children: ReactNode }) {
  return createPortal(
    <div className="tablet:w-3/5 tablet:min-w-[435px] fixed right-0 max-h-screen min-w-screen bg-slate-800">
      {children}
    </div>,
    document.getElementById('side-page-root') as HTMLElement
  );
}
