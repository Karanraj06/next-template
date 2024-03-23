import { FC } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface FormSuccessProps {
  message?: string;
}

const FormSuccess: FC<FormSuccessProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className='flex items-center gap-x-2 rounded-md bg-emerald-500/15 p-3 text-sm text-emerald-500'>
      <CheckCircle2 className='size-4' />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;