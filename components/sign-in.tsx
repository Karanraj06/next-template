import Link from 'next/link';

import AuthForm from '@/components/auth-form';
import { Icons } from '@/components/icons';

export default function SignIn() {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center'>
        <Icons.logo className='mx-auto h-6 w-6' />
        <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
        <p className='mx-auto max-w-xs text-sm'>
          By clicking continue, you agree to our Terms of Service and Privacy
          Policy.
        </p>
      </div>
      <AuthForm />
      <p className='px-8 text-center text-sm text-muted-foreground'>
        Don&apos;t have an account?{' '}
        <Link
          href='/sign-up'
          className='hover:text-brand text-sm underline underline-offset-4'
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}
