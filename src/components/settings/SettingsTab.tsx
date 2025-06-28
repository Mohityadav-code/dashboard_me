import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface SettingsTabProps {
  id: string;
  name: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: (id: string) => void;
}

export const SettingsTab: React.FC<SettingsTabProps> = ({
  id,
  name,
  icon: Icon,
  isActive,
  onClick
}) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={`
        flex items-center py-3 px-4 border-b-2 font-medium text-sm transition-all duration-200 rounded-t-lg
        ${isActive
          ? 'border-primary-500 text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
          : 'border-transparent text-secondary-500 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-700/50'
        }
      `}
    >
      <Icon className="w-4 h-4 mr-2" />
      {name}
    </button>
  );
}; 