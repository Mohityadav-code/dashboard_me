import type { UsersResponse, User, ApiError } from '../types';

const BASE_URL = 'https://reqres.in/api';
const API_KEY = 'reqres-free-v1';

class ApiService {
  private async request<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
          'x-api-key': API_KEY,
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        const apiError: ApiError = { message: error.message };
        throw apiError;
      }
      const apiError: ApiError = { message: 'An unexpected error occurred' };
      throw apiError;
    }
  }

  async getUsers(page: number = 1, perPage: number = 6): Promise<UsersResponse> {
    return this.request<UsersResponse>(`/users?page=${page}&per_page=${perPage}`);
  }

  async getUser(id: number): Promise<{ data: User }> {
    return this.request<{ data: User }>(`/users/${id}`);
  }

  async getDashboardStats(): Promise<any> {
    const usersResponse = await this.getUsers(1, 12);
    return {
      totalUsers: usersResponse.total,
      activeUsers: Math.floor(usersResponse.total * 0.8),
      newUsers: Math.floor(usersResponse.total * 0.15),
      retention: 92.5
    };
  }
}

export const apiService = new ApiService();

 