import SignupForm from '@/app/(auth)/signup/_components/SignupForm';

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col">
        <SignupForm />
      </div>
    </div>
  );
}
