import React, { useState } from 'react';
import { Search, SlidersHorizontal, RefreshCw } from 'lucide-react';
import type { FilterOptions } from '../../types';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

interface UserFiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: Partial<FilterOptions>) => void;
  onRefresh: () => void;
  loading?: boolean;
}

export const UserFilters: React.FC<UserFiltersProps> = ({
  filters,
  onFiltersChange,
  onRefresh,
  loading = false
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <Input
          placeholder="Search users by name or email..."
          value={filters.search}
          onChange={(e) => onFiltersChange({ search: e.target.value })}
          icon={<Search className="w-4 h-4" />}
          className="bg-white dark:bg-secondary-800"
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <select
          value={`${filters.sortBy}-${filters.sortOrder}`}
          onChange={(e) => {
            const [sortBy, sortOrder] = e.target.value.split('-') as [FilterOptions['sortBy'], FilterOptions['sortOrder']];
            onFiltersChange({ sortBy, sortOrder });
          }}
          className="px-3 py-2 bg-white dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="email-asc">Email (A-Z)</option>
          <option value="email-desc">Email (Z-A)</option>
          <option value="id-asc">ID (Low to High)</option>
          <option value="id-desc">ID (High to Low)</option>
        </select>
        
        <Button
          variant="outline"
          size="sm"
          onClick={onRefresh}
          loading={loading}
          className="w-9 h-9 p-0"
        >
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};