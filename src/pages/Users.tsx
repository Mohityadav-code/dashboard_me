import React from 'react';
import { UserTable } from '../components/users/UserTable';
import { UserFilters } from '../components/users/UserFilters';
import { UserPagination } from '../components/users/UserPagination';
import { useUsers } from '../hooks/useUsers';

export const Users: React.FC = () => {
  const {
    users,
    loading,
    error,
    pagination,
    filters,
    goToPage,
    updateFilters,
    refresh
  } = useUsers();

  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-secondary-900 dark:text-white mb-2">
          User Management
        </h1>
        <p className="text-secondary-600 dark:text-secondary-400">
          Manage and view all registered users in your application.
        </p>
      </div>

      {/* Filters */}
      <UserFilters
        filters={filters}
        onFiltersChange={updateFilters}
        onRefresh={refresh}
        loading={loading}
      />

      {/* Table */}
      <UserTable
        users={users}
        loading={loading}
        error={error}
        filters={filters}
        onFiltersChange={updateFilters}
      />

      {/* Pagination */}
      {!loading && !error && (
        <UserPagination
          currentPage={pagination.page}
          totalPages={pagination.total_pages}
          onPageChange={goToPage}
          loading={loading}
        />
      )}
    </div>
  );
};