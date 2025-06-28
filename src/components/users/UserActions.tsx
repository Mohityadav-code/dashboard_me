import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '../ui/Button';
import { Tooltip } from '../ui/Tooltip';
import type { User } from '../../types';

interface UserActionsProps {
  user: User;
}

export const UserActions: React.FC<UserActionsProps> = ({
  user
}) => {
  console.log("user",user)
  return (
    <div className="relative">
      <Tooltip content="Mock functionality - User actions menu" position="left">
        <Button
          variant="ghost"
          size="sm"
          className="w-8 h-8 p-0 cursor-default"
        >
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </Tooltip>
    </div>
  );
};