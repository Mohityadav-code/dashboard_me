import React from 'react';

interface SettingsCardProps {
  title: string;
  description: string;
  action?: React.ReactNode;
  className?: string;
}

export const SettingsCard: React.FC<SettingsCardProps> = ({
  title,
  description,
  action,
  className = ''
}) => {
  return (
    <div className={`flex items-center justify-between p-4 border border-secondary-200 dark:border-secondary-700 rounded-lg ${className}`}>
      <div>
        <h4 className="font-medium text-secondary-900 dark:text-white">{title}</h4>
        <p className="text-sm text-secondary-600 dark:text-secondary-400">{description}</p>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}; 