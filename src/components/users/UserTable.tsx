import React from 'react';
import type { User, FilterOptions } from '../../types';
import { Card } from '../ui/Card';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { Badge } from '../ui/Badge';
import { UserActions } from './UserActions';
import { UserTableSkeleton } from '../ui/Skeleton';
import { 
  ChevronUp, 
  ChevronDown, 
  Mail, 
  Phone 
} from 'lucide-react';

interface UserTableProps {
  users: User[];
  loading: boolean;
  error: string | null;
  filters: FilterOptions;
  onFiltersChange: (filters: Partial<FilterOptions>) => void;
  itemsPerPage?: number;
}

export const UserTable: React.FC<UserTableProps> = ({
  users,
  loading,
  error,
  filters,
  onFiltersChange,
  itemsPerPage = 5
}) => {
  const handleSort = (sortBy: FilterOptions['sortBy']) => {
    const newSortOrder = filters.sortBy === sortBy && filters.sortOrder === 'asc' ? 'desc' : 'asc';
    onFiltersChange({ sortBy, sortOrder: newSortOrder });
  };

  const handleUserAction = (action: string, user: User) => {
    console.log(`${action} action for user:`, user);
    // In a real app, these would trigger actual API calls or modals
    switch (action) {
      case 'view':
        alert(`Viewing details for ${user.first_name} ${user.last_name}`);
        break;
      case 'edit':
        alert(`Editing ${user.first_name} ${user.last_name}`);
        break;
      case 'delete':
        if (confirm(`Are you sure you want to delete ${user.first_name} ${user.last_name}?`)) {
          alert(`Deleted ${user.first_name} ${user.last_name}`);
        }
        break;
      case 'email':
        alert(`Sending email to ${user.email}`);
        break;
      case 'toggle':
        alert(`Toggled status for ${user.first_name} ${user.last_name}`);
        break;
    }
  };

  const SortIcon = ({ column }: { column: FilterOptions['sortBy'] }) => {
    if (filters.sortBy !== column) return null;
    return filters.sortOrder === 'asc' ? 
      <ChevronUp className="w-4 h-4" /> : 
      <ChevronDown className="w-4 h-4" />;
  };

  if (error) {
    return (
      <Card className="p-8 text-center">
        <div className="text-red-500 dark:text-red-400 mb-2">Error loading users</div>
        <p className="text-secondary-600 dark:text-secondary-400">{error}</p>
      </Card>
    );
  }

  if (loading) {
    return <UserTableSkeleton rows={itemsPerPage} />;
  }

  return (
    <Card className="overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden md:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary-50 dark:bg-secondary-800 border-b border-secondary-200 dark:border-secondary-700">
              <tr>
                <th className="px-6 py-3 text-left">
                  <button
                    onClick={() => handleSort('name')}
                    className="flex items-center space-x-1 text-xs font-medium uppercase tracking-wider text-secondary-500 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300"
                  >
                    <span>User</span>
                    <SortIcon column="name" />
                  </button>
                </th>
                <th className="px-6 py-3 text-left">
                  <button
                    onClick={() => handleSort('email')}
                    className="flex items-center space-x-1 text-xs font-medium uppercase tracking-wider text-secondary-500 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300"
                  >
                    <span>Email</span>
                    <SortIcon column="email" />
                  </button>
                </th>
                <th className="px-6 py-3 text-left">
                  <span className="text-xs font-medium uppercase tracking-wider text-secondary-500 dark:text-secondary-400">
                    Status
                  </span>
                </th>
                <th className="px-6 py-3 text-left">
                  <button
                    onClick={() => handleSort('id')}
                    className="flex items-center space-x-1 text-xs font-medium uppercase tracking-wider text-secondary-500 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300"
                  >
                    <span>ID</span>
                    <SortIcon column="id" />
                  </button>
                </th>
                <th className="px-6 py-3 text-right">
                  <span className="text-xs font-medium uppercase tracking-wider text-secondary-500 dark:text-secondary-400">
                    Actions
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-secondary-200 dark:divide-secondary-700">
              {users.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-secondary-500 dark:text-secondary-400">
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user.id} className="hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={user.avatar}
                          alt={`${user.first_name} ${user.last_name}`}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="text-sm font-medium text-secondary-900 dark:text-white">
                            {user.first_name} {user.last_name}
                          </div>
                          <div className="text-sm text-secondary-500 dark:text-secondary-400">
                            User #{user.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-secondary-900 dark:text-white">{user.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="success" size="sm">
                        Active
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-secondary-500 dark:text-secondary-400">
                        #{user.id}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <UserActions
                        user={user}
                        onView={(user) => handleUserAction('view', user)}
                        onEdit={(user) => handleUserAction('edit', user)}
                        onDelete={(user) => handleUserAction('delete', user)}
                        onSendEmail={(user) => handleUserAction('email', user)}
                        onToggleStatus={(user) => handleUserAction('toggle', user)}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden divide-y divide-secondary-200 dark:divide-secondary-700">
        {users.length === 0 ? (
          <div className="p-6 text-center text-secondary-500 dark:text-secondary-400">
            No users found
          </div>
        ) : (
          users.map((user) => (
            <div key={user.id} className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <img
                    src={user.avatar}
                    alt={`${user.first_name} ${user.last_name}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-secondary-900 dark:text-white">
                      {user.first_name} {user.last_name}
                    </div>
                    <div className="text-sm text-secondary-500 dark:text-secondary-400">
                      User #{user.id}
                    </div>
                  </div>
                </div>
                <UserActions
                  user={user}
                  onView={(user) => handleUserAction('view', user)}
                  onEdit={(user) => handleUserAction('edit', user)}
                  onDelete={(user) => handleUserAction('delete', user)}
                  onSendEmail={(user) => handleUserAction('email', user)}
                  onToggleStatus={(user) => handleUserAction('toggle', user)}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="w-4 h-4 text-secondary-400" />
                  <span className="text-secondary-600 dark:text-secondary-400">{user.email}</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="success" size="sm">
                    Active
                  </Badge>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
};