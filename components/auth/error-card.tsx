import { TriangleAlert } from 'lucide-react';

import CardWrapper from './card-wrapper';

export default function ErrorCard() {
  return (
    <CardWrapper
      headerLabel='Oops! Something went wrong!'
      backButtonHref='/auth/login'
      backButtonLabel='Back to login'
    >
      <div className='flex w-full items-center justify-center'>
        <TriangleAlert className='text-destructive' />
      </div>
    </CardWrapper>
  );
}
