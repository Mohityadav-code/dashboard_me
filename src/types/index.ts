export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export interface ApiError {
  message: string;
  status?: number;
}

export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  newUsers: number;
  retention: number;
}

export type Theme = 'light' | 'dark' | 'system';

export interface FilterOptions {
  search: string;
  sortBy: 'name' | 'email' | 'id';
  sortOrder: 'asc' | 'desc';
}