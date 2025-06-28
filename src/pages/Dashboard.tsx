import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Users, UserCheck, UserPlus, TrendingUp } from 'lucide-react';
import { StatsCard } from '../components/dashboard/StatsCard';
import { useDashboardStats } from '../hooks/useDashboardStats';
import { Tooltip } from '../components/ui/Tooltip';

interface DashboardProps {
  onNavigate: (path: string) => void;
}

export const Dashboard: React.FC = () => {
  const { onNavigate } = useOutletContext<{ onNavigate: (path: string) => void }>();
  const { stats, loading, error } = useDashboardStats();

  const quickActions = [
    {
      title: 'Manage Users',
      description: 'View, edit, and manage user accounts',
      path: '/users',
      icon: Users
    },
    {
      title: 'Generate Reports',
      description: 'Create detailed analytics reports',
      path: '/reports',
      icon: TrendingUp
    },
    {
      title: 'System Settings',
      description: 'Configure application settings',
      path: '/settings',
      icon: UserCheck
    }
  ];

  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-secondary-900 dark:text-white mb-2">
          Dashboard Overview
        </h1>
        <p className="text-secondary-600 dark:text-secondary-400">
          Welcome back! Here's what's happening with your users today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Users"
          value={stats?.totalUsers || 0}
          icon={Users}
          change={{ value: 12, type: 'increase' }}
          loading={loading}
          color="primary"
        />
        <StatsCard
          title="Active Users"
          value={stats?.activeUsers || 0}
          icon={UserCheck}
          change={{ value: 8, type: 'increase' }}
          loading={loading}
          color="success"
        />
        <StatsCard
          title="New Users"
          value={stats?.newUsers || 0}
          icon={UserPlus}
          change={{ value: 3, type: 'decrease' }}
          loading={loading}
          color="info"
        />
        <StatsCard
          title="Retention Rate"
          value={stats ? `${stats.retention}%` : '0%'}
          icon={TrendingUp}
          change={{ value: 2, type: 'increase' }}
          loading={loading}
          color="warning"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-700 p-6">
        <h2 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action) => (
            <div
              key={action.path}
              className="p-4 border border-secondary-200 dark:border-secondary-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors cursor-pointer group"
              onClick={() => onNavigate(action.path)}
            >
              <div className="flex items-center mb-2">
                <action.icon className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                <h3 className="font-medium text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  {action.title}
                </h3>
              </div>
              <p className="text-sm text-secondary-600 dark:text-secondary-400">
                {action.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <p className="text-red-600 dark:text-red-400">
            Error loading dashboard data: {error}
          </p>
        </div>
      )}
    </div>
  );
};