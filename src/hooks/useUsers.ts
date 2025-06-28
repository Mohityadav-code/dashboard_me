import { useState, useEffect, useCallback } from 'react';
import type { User, UsersResponse, FilterOptions } from '../types';
import { apiService } from '../services/api';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    page: 1,
    per_page: 6,
    total: 0,
    total_pages: 0,
  });
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    sortBy: 'name',
    sortOrder: 'asc',
  });

  const fetchUsers = useCallback(async (page: number = 1) => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiService.getUsers(page, pagination.per_page);
      setUsers(response.data);
      setPagination({
        page: response.page,
        per_page: response.per_page,
        total: response.total,
        total_pages: response.total_pages,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  }, [pagination.per_page]);

  const filteredUsers = users.filter(user => {
    const searchTerm = filters.search.toLowerCase();
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    return fullName.includes(searchTerm) || user.email.toLowerCase().includes(searchTerm);
  }).sort((a, b) => {
    let aValue: string | number;
    let bValue: string | number;

    switch (filters.sortBy) {
      case 'name':
        aValue = `${a.first_name} ${a.last_name}`;
        bValue = `${b.first_name} ${b.last_name}`;
        break;
      case 'email':
        aValue = a.email;
        bValue = b.email;
        break;
      case 'id':
      default:
        aValue = a.id;
        bValue = b.id;
        break;
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      const comparison = aValue.localeCompare(bValue);
      return filters.sortOrder === 'asc' ? comparison : -comparison;
    } else {
      return filters.sortOrder === 'asc' ? (aValue as number) - (bValue as number) : (bValue as number) - (aValue as number);
    }
  });

  useEffect(() => {
    fetchUsers(1);
  }, [fetchUsers]);

  const goToPage = (page: number) => {
    fetchUsers(page);
  };

  const updateFilters = (newFilters: Partial<FilterOptions>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const refresh = () => {
    fetchUsers(pagination.page);
  };

  return {
    users: filteredUsers,
    loading,
    error,
    pagination,
    filters,
    goToPage,
    updateFilters,
    refresh,
  };
};