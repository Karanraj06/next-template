'use client';

import { FC } from 'react';

import { useCurrentRole } from '@/hooks/use-current-role';

import FormError from '../form-error';

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: string;
}

const RoleGate: FC<RoleGateProps> = ({ children, allowedRole }) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message='You do not have permission to view this content!' />
    );
  }

  return children;
};

export default RoleGate;
