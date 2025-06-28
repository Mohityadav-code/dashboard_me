import React from 'react';
import { FileText, Download, Calendar, TrendingUp } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const Reports: React.FC = () => {
  const reports = [
    {
      title: 'User Activity Report',
      description: 'Detailed analysis of user engagement and activity patterns',
      lastGenerated: '2 hours ago',
      type: 'CSV',
    },
    {
      title: 'Monthly Analytics',
      description: 'Comprehensive monthly performance metrics and insights',
      lastGenerated: '1 day ago',
      type: 'PDF',
    },
    {
      title: 'Growth Metrics',
      description: 'User acquisition and retention analysis',
      lastGenerated: '3 days ago',
      type: 'Excel',
    },
  ];

  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-secondary-900 dark:text-white mb-2">
          Reports & Analytics
        </h1>
        <p className="text-secondary-600 dark:text-secondary-400">
          Generate and download comprehensive reports about your application data.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary-900 dark:text-white">24</p>
              <p className="text-sm text-secondary-600 dark:text-secondary-400">Total Reports</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary-900 dark:text-white">12</p>
              <p className="text-sm text-secondary-600 dark:text-secondary-400">This Month</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Download className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary-900 dark:text-white">1.2K</p>
              <p className="text-sm text-secondary-600 dark:text-secondary-400">Downloads</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Reports List */}
      <Card>
        <div className="p-6 border-b border-secondary-200 dark:border-secondary-700">
          <h2 className="text-lg font-semibold text-secondary-900 dark:text-white">
            Available Reports
          </h2>
        </div>
        <div className="divide-y divide-secondary-200 dark:divide-secondary-700">
          {reports.map((report, index) => (
            <div key={index} className="p-6 hover:bg-secondary-50 dark:hover:bg-secondary-800/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-secondary-900 dark:text-white mb-1">
                    {report.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400 mb-2">
                    {report.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-secondary-500 dark:text-secondary-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Last generated {report.lastGenerated}</span>
                    </div>
                    <span>•</span>
                    <span>{report.type} format</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    Generate
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};