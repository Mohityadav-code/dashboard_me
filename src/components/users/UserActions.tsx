import React, { useState } from 'react';
import { MoreHorizontal, Edit, Trash2, Eye, UserCheck, UserX, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import type { User } from '../../types';

interface UserActionsProps {
  user: User;
  onEdit?: (user: User) => void;
  onDelete?: (user: User) => void;
  onView?: (user: User) => void;
  onToggleStatus?: (user: User) => void;
  onSendEmail?: (user: User) => void;
}

export const UserActions: React.FC<UserActionsProps> = ({
  user,
  onEdit,
  onDelete,
  onView,
  onToggleStatus,
  onSendEmail
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAction = (action: () => void) => {
    action();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 p-0"
      >
        <MoreHorizontal className="w-4 h-4" />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700 py-1 z-20">
            {onView && (
              <button
                onClick={() => handleAction(() => onView(user))}
                className="w-full flex items-center px-3 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </button>
            )}
            
            {onEdit && (
              <button
                onClick={() => handleAction(() => onEdit(user))}
                className="w-full flex items-center px-3 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors"
              >
                <Edit className="w-4 h-4 mr-2" />
                Edit User
              </button>
            )}
            
            {onSendEmail && (
              <button
                onClick={() => handleAction(() => onSendEmail(user))}
                className="w-full flex items-center px-3 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </button>
            )}
            
            {onToggleStatus && (
              <button
                onClick={() => handleAction(() => onToggleStatus(user))}
                className="w-full flex items-center px-3 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors"
              >
                <UserCheck className="w-4 h-4 mr-2" />
                Toggle Status
              </button>
            )}
            
            <hr className="my-1 border-secondary-200 dark:border-secondary-700" />
            
            {onDelete && (
              <button
                onClick={() => handleAction(() => onDelete(user))}
                className="w-full flex items-center px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete User
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};