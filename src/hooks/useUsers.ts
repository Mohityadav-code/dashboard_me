import { useState, useEffect, useCallback } from 'react';
import type { User, FilterOptions } from '../types';
import { apiService } from '../services/api';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    page: 1,
    per_page: 5,
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
      
      // Always fetch 50 users to have enough data for pagination
      const response = await apiService.getUsers(page, 50);
      
      setUsers(response.data);
      setPagination(prev => ({
        page: response.page,
        per_page: prev.per_page,
        total: response.total,
        total_pages: Math.ceil(response.total / prev.per_page),
      }));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  }, []);

  // Filter and sort users
  const filteredAndSortedUsers = users.filter(user => {
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

  // Calculate pagination for filtered results
  const currentPagination = {
    page: pagination.page,
    per_page: pagination.per_page,
    total: filteredAndSortedUsers.length,
    total_pages: Math.max(1, Math.ceil(filteredAndSortedUsers.length / pagination.per_page)),
  };

  // Get current page users
  const currentPageUsers = filteredAndSortedUsers.slice(
    (pagination.page - 1) * pagination.per_page,
    pagination.page * pagination.per_page
  );

  useEffect(() => {
    fetchUsers(1);
  }, [fetchUsers]);

  const goToPage = (page: number) => {
    setPagination(prev => ({ ...prev, page }));
  };

  const updateFilters = (newFilters: Partial<FilterOptions>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    // Reset to first page when filters change
    setPagination(prev => ({ ...prev, page: 1 }));
  };

  const updatePerPage = (perPage: number) => {
    setPagination(prev => ({ 
      ...prev, 
      per_page: perPage,
      page: 1, // Reset to first page when changing per_page
      total_pages: Math.max(1, Math.ceil(prev.total / perPage))
    }));
  };

  const refresh = () => {
    fetchUsers(pagination.page);
  };

  return {
    users: currentPageUsers,
    loading,
    error,
    pagination: currentPagination,
    filters,
    goToPage,
    updateFilters,
    updatePerPage,
    refresh,
  };
};