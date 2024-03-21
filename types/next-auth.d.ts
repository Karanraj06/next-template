import type { User } from 'next-auth';

import 'next-auth/jwt';

export type ExtendedUser = User & {
  role: string;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
};

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }
}
declare module 'next-auth/jwt' {
  interface JWT {
    role: string;
    isTwoFactorEnabled: boolean;
    isOAuth: boolean;
  }
}
