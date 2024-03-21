import { FC } from 'react';
import { TriangleAlert } from 'lucide-react';

interface FormErrorProps {
  message?: string;
}

const FormError: FC<FormErrorProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className='bg-destructive/15 text-destructive flex items-center gap-x-2 rounded-md p-3 text-sm'>
      <TriangleAlert className='size-4' />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
