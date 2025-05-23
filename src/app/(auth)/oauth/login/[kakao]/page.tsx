export default function KakaoLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // code, state 를 추출해서 POST 요청
  console.log('searchParams', searchParams);
  // const { code, state } = searchParams;

  return <div>LoginPage</div>;
}
