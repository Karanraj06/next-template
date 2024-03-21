import { currentUser } from '@/lib/auth';
import UserInfo from '@/components/user-info';

export default async function Page() {
  const user = await currentUser();

  return <UserInfo label='Server component' user={user} />;
}
