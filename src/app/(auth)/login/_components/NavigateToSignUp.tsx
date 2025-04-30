import Link from 'next/link';

export default function NavigateToSignUp() {
  return (
    <div className="mt-6 flex justify-center gap-3">
      <span>아직 계정이 없으신가요?</span>
      <Link href={'/signup'} className="text-green-700">
        가입하기
      </Link>
    </div>
  );
}
