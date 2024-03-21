import { FC } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      {children}
    </div>
  );
};

export default Layout;
