'use client';

import { useCurrentUser } from '@/hooks/use-current-user';
import UserInfo from '@/components/user-info';

export default function Page() {
  const user = useCurrentUser();

  return <UserInfo label='Client component' user={user} />;
}
