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
    updatePerPage,
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
        itemsPerPage={pagination.per_page}
      />

      {/* Pagination - Always show if not loading and no error */}
      {!loading && !error && (
        <UserPagination
          currentPage={pagination.page}
          totalPages={pagination.total_pages}
          totalItems={pagination.total}
          itemsPerPage={pagination.per_page}
          onPageChange={goToPage}
          onPerPageChange={updatePerPage}
          loading={loading}
        />
      )}
    </div>
  );
};