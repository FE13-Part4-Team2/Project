import { useLayoutEffect, useRef, useState } from 'react';

const BreakEmail = ({ email }: { email: string }) => {
  const [shouldBreak, setShouldBreak] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const text = textRef.current;

    if (!wrapper || !text) return;

    text.style.whiteSpace = 'nowrap';
    text.style.overflow = 'visible';

    const isOverflowing = text.scrollWidth > wrapper.clientWidth;
    setShouldBreak(isOverflowing);
  }, [email]);

  const [local, domain] = email.includes('@') ? email.split('@') : [email];

  return (
    <div ref={wrapperRef} className="w-full leading-tight">
      {shouldBreak && email.includes('@') ? (
        <p className="text-xs-regular break-words whitespace-pre-wrap text-slate-300">
          {local}
          {'\n'}@{domain}
        </p>
      ) : (
        <span
          ref={textRef}
          className="text-xs-regular block truncate text-slate-300"
        >
          {email}
        </span>
      )}
    </div>
  );
};

export default BreakEmail;
