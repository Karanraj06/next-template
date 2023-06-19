import Link from 'next/link';

import { getAuthSession } from '@/lib/auth';

import { Icons } from './icons';
import { buttonVariants } from './ui/button';
import UserNav from './user-nav';

export default async function Navbar() {
  const session = await getAuthSession();

  return (
    <div className='fixed inset-x-0 top-0 z-[10] h-[64px] border-b border-zinc-300 bg-zinc-100/50 backdrop-blur-sm backdrop-saturate-150'>
      <div className='container mx-auto flex h-full max-w-7xl items-center justify-between gap-2'>
        <Link href='/' className='flex items-center gap-2'>
          <Icons.logo className='h-8 w-8 sm:h-6 sm:w-6' />
          <p className='hidden text-sm font-medium text-zinc-700 md:block'>
            Next.js 13 Template
          </p>
        </Link>
        {session?.user ? (
          <UserNav user={session.user} />
        ) : (
          <Link href='/sign-in' className={`${buttonVariants()} shrink-0`}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
