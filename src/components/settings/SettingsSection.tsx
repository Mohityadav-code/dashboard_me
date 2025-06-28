import React from 'react';

interface SettingsSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const SettingsSection: React.FC<SettingsSectionProps> = ({
  title,
  children,
  className = ''
}) => {
  return (
    <div className={`space-y-6 ${className}`}>
      <div>
        <h3 className="text-lg font-medium text-secondary-900 dark:text-white mb-4">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}; 