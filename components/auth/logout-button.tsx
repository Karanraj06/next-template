'use client';

import { FC } from 'react';
import { logout } from '@/actions/logout';

interface LogoutButtonProps {
  children?: React.ReactNode;
}

const LogoutButton: FC<LogoutButtonProps> = ({ children }) => {
  function handleOnClick() {
    logout();
  }
  return (
    <span onClick={handleOnClick} className='cursor-pointer'>
      {children}
    </span>
  );
};

export default LogoutButton;
