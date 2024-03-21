import { FC } from 'react';

import Nav from './_components/nav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-y-10'>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
