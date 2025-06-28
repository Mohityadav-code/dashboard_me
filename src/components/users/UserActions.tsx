import React, { useState } from 'react';
import { MoreHorizontal, Edit, Trash2, Eye, UserCheck, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { Tooltip } from '../ui/Tooltip';
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
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAction = (action: () => void, isMock: boolean = false) => {
    if (isMock) {
      alert(`This is a mock feature. In a real application, this would ${action.name || 'perform the action'}.`);
      setIsOpen(false);
      return;
    }
    action();
    setIsOpen(false);
  };

  const mockView = () => {
    alert(`Viewing details for ${user.first_name} ${user.last_name} (${user.email})`);
  };

  const mockEdit = () => {
    alert(`Editing user: ${user.first_name} ${user.last_name}`);
  };

  const mockSendEmail = () => {
    alert(`Sending email to ${user.email}`);
  };

  const mockToggleStatus = () => {
    alert(`Toggling status for ${user.first_name} ${user.last_name}`);
  };

  const mockDelete = () => {
    if (confirm(`Are you sure you want to delete ${user.first_name} ${user.last_name}?`)) {
      alert(`User ${user.first_name} ${user.last_name} would be deleted in a real application.`);
    }
  };

  return (
    <div className="relative">
      <Tooltip content="User actions">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="w-8 h-8 p-0"
        >
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </Tooltip>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700 py-1 z-20">
            <Tooltip content="Mock feature - View user details">
              <button
                onClick={() => handleAction(mockView, true)}
                className="w-full flex items-center px-3 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </button>
            </Tooltip>
            
            <Tooltip content="Mock feature - Edit user">
              <button
                onClick={() => handleAction(mockEdit, true)}
                className="w-full flex items-center px-3 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors"
              >
                <Edit className="w-4 h-4 mr-2" />
                Edit User
              </button>
            </Tooltip>
            
            <Tooltip content="Mock feature - Send email">
              <button
                onClick={() => handleAction(mockSendEmail, true)}
                className="w-full flex items-center px-3 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </button>
            </Tooltip>
            
            <Tooltip content="Mock feature - Toggle user status">
              <button
                onClick={() => handleAction(mockToggleStatus, true)}
                className="w-full flex items-center px-3 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors"
              >
                <UserCheck className="w-4 h-4 mr-2" />
                Toggle Status
              </button>
            </Tooltip>
            
            <hr className="my-1 border-secondary-200 dark:border-secondary-700" />
            
            <Tooltip content="Mock feature - Delete user">
              <button
                onClick={() => handleAction(mockDelete, true)}
                className="w-full flex items-center px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete User
              </button>
            </Tooltip>
          </div>
        </>
      )}
    </div>
  );
};