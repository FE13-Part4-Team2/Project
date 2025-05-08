import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <div className="flex h-[calc(100vh-60px)] flex-col items-center justify-center overflow-hidden px-5 text-center text-white">
        <div className="mb-10">
          <Image
            src="/image/error_404.png"
            alt="404 Not Found"
            width={810}
            height={255}
            className="mx-auto max-w-full opacity-90"
          />
        </div>

        <h1 className="text-2xl-medium laptop:text-4xl-medium mb-5 font-bold">
          페이지를 찾을 수 없습니다.
        </h1>
        <p className="text-md-medium laptop:text-lg-medium laptop:leading-6 mb-6 text-slate-500">
          요청하신 페이지가 존재하지 않거나,
          <br />
          이동되었을 수 있습니다.
        </p>

        <Link
          href="/"
          className="text-md-medium laptop:text-lg-medium w-[186px] rounded-[12px] bg-green-700 py-4 text-white transition hover:bg-green-800"
        >
          홈으로 이동
        </Link>
      </div>
    </>
  );
}
