import { FC } from 'react';

interface HeaderProps {
  label: string;
}

const Header: FC<HeaderProps> = ({ label }) => {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-y-4'>
      <h1 className='text-3xl font-semibold'>next-template</h1>
      <p className='text-muted-foreground text-sm'>{label}</p>
    </div>
  );
};

export default Header;
