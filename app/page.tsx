import { Button } from '@/components/ui/button';
import LoginButton from '@/components/auth/login-button';

export default function Page() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <div className='space-y-6 text-center'>
        <h1 className='text-6xl font-semibold drop-shadow-md'>next-template</h1>
        <p className='text-lg'>Next.js 14 template with Prisma and Auth.js</p>
        <div>
          <LoginButton asChild>
            <Button variant='secondary' size='lg'>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
