const BreakEmail = ({ email }: { email: string }) => {
  const [local, domain] = email.split('@');

  return (
    <p
      className="text-xs-regular leading-tight text-slate-300"
      style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
    >
      {local}
      {'\n'}@{domain}
    </p>
  );
};

export default BreakEmail;
