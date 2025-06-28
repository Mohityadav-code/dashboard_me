import React from 'react';
import { Card } from '../ui/Card';
import { Skeleton } from '../ui/Skeleton';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
  };
  loading?: boolean;
  color?: 'primary' | 'success' | 'warning' | 'info';
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon: Icon,
  change,
  loading = false,
  color = 'primary'
}) => {
  const colorClasses = {
    primary: 'bg-primary-500 text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-white',
    info: 'bg-blue-500 text-white'
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-200 animate-fade-in" hover>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-secondary-600 dark:text-secondary-400 mb-1">
            {title}
          </p>
          {loading ? (
            <div className="space-y-2">
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-4 w-24" />
            </div>
          ) : (
            <>
              <p className="text-2xl font-bold text-secondary-900 dark:text-white mb-1">
                {typeof value === 'number' ? value.toLocaleString() : value}
              </p>
              {change && (
                <div className="flex items-center">
                  <span className={`
                    text-xs font-medium
                    ${change.type === 'increase' 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                    }
                  `}>
                    {change.type === 'increase' ? '+' : '-'}{Math.abs(change.value)}%
                  </span>
                  <span className="text-xs text-secondary-500 dark:text-secondary-400 ml-1">
                    from last month
                  </span>
                </div>
              )}
            </>
          )}
        </div>
        <div className={`w-12 h-12 rounded-lg ${colorClasses[color]} flex items-center justify-center`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </Card>
  );
};