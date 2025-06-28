import React from 'react';
import { BarChart3, PieChart, TrendingUp, Users } from 'lucide-react';
import { Card } from '../components/ui/Card';

export const Analytics: React.FC = () => {
  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-secondary-900 dark:text-white mb-2">
          Analytics Dashboard
        </h1>
        <p className="text-secondary-600 dark:text-secondary-400">
          Deep insights into user behavior and application performance.
        </p>
      </div>

      {/* Chart Placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
              User Growth
            </h3>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div className="h-64 bg-secondary-50 dark:bg-secondary-700 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-secondary-400 mx-auto mb-2" />
              <p className="text-secondary-500 dark:text-secondary-400">Chart visualization would go here</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
              User Distribution
            </h3>
            <PieChart className="w-5 h-5 text-blue-500" />
          </div>
          <div className="h-64 bg-secondary-50 dark:bg-secondary-700 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <PieChart className="w-12 h-12 text-secondary-400 mx-auto mb-2" />
              <p className="text-secondary-500 dark:text-secondary-400">Pie chart would go here</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 text-center">
          <Users className="w-8 h-8 text-primary-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-secondary-900 dark:text-white">94.2%</p>
          <p className="text-sm text-secondary-600 dark:text-secondary-400">User Satisfaction</p>
        </Card>
        
        <Card className="p-6 text-center">
          <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-secondary-900 dark:text-white">2.4x</p>
          <p className="text-sm text-secondary-600 dark:text-secondary-400">Growth Rate</p>
        </Card>
        
        <Card className="p-6 text-center">
          <BarChart3 className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-secondary-900 dark:text-white">12.5K</p>
          <p className="text-sm text-secondary-600 dark:text-secondary-400">Page Views</p>
        </Card>
        
        <Card className="p-6 text-center">
          <PieChart className="w-8 h-8 text-purple-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-secondary-900 dark:text-white">68%</p>
          <p className="text-sm text-secondary-600 dark:text-secondary-400">Conversion Rate</p>
        </Card>
      </div>
    </div>
  );
};