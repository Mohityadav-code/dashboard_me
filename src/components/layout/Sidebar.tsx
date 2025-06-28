import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Users, 
  FileText, 
  Settings, 
  BarChart3,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: (path: string) => void;
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Reports', href: '/reports', icon: FileText },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle, onNavigate }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-secondary-900 
        border-r border-secondary-200 dark:border-secondary-700
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-secondary-200 dark:border-secondary-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-secondary-900 dark:text-white">
              AdminPro
            </span>
          </div>
          <button
            onClick={onToggle}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
          >
            <X className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-3">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) => `
                    flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200
                    ${isActive 
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border-r-2 border-primary-600' 
                      : 'text-secondary-600 dark:text-secondary-400 hover:bg-secondary-50 dark:hover:bg-secondary-800 hover:text-secondary-900 dark:hover:text-secondary-200'
                    }
                  `}
                  onClick={() => {
                    onNavigate(item.href);
                    if (window.innerWidth < 1024) {
                      onToggle();
                    }
                  }}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-secondary-200 dark:border-secondary-700">
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary-50 dark:bg-secondary-800">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-white">JS</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-secondary-900 dark:text-white truncate">
                John Smith
              </p>
              <p className="text-xs text-secondary-500 dark:text-secondary-400 truncate">
                Administrator
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};