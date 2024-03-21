'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogTrigger } from '@radix-ui/react-dialog';

import LoginForm from './login-form';

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}

const LoginButton: FC<LoginButtonProps> = ({ children, mode, asChild }) => {
  const router = useRouter();

  function handleOnClick() {
    router.push('/auth/login');
  }

  if (mode === 'modal') {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className='w-auto border-none bg-transparent p-0'>
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <span onClick={handleOnClick} className='cursor-pointer'>
      {children}
    </span>
  );
};

export default LoginButton;
